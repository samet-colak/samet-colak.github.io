// --- 404 SAYFASI: GELİŞMİŞ PREMIUM YILAN (SNAKE) OYUNU ---
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-game-btn');
    const gameContainer = document.getElementById('game-container');
    const canvas = document.getElementById('gameCanvas');
    const scoreEl = document.getElementById('score');
    const highScoreEl = document.getElementById('high-score');
    const gameOverlay = document.getElementById('game-overlay');
    const restartBtn = document.getElementById('restart-game-btn');
    const gameOverText = document.getElementById('game-over-text');
    
    // Terminal Butonları
    const gtClose = document.getElementById('gt-close');
    const gtMin = document.getElementById('gt-min');
    const gtMax = document.getElementById('gt-max');
    const worldSelector = document.getElementById('world-selector');
    const worldBtns = document.querySelectorAll('.w-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const confirmStartBtn = document.getElementById('confirm-start-btn');
    const changeMapBtn = document.getElementById('change-map-btn');

    if (!startBtn || !canvas) return;
    
    // --- WEB AUDIO API: SIFIR HARİCİ DOSYA İLE SES MOTORU ---
    let audioCtx;
    const playSound = (type) => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        const now = audioCtx.currentTime;
        
        if (type === 'eat') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'die') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.4);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === 'start') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(200, now);
            osc.frequency.setValueAtTime(600, now + 0.1);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
        }
    };

    const ctx = canvas.getContext('2d');
    const gridSize = 20; // Tam kare, büyük pikseller
    let tileCount = canvas.width / gridSize; // Değişken olması için let yapıldı
    let selectedSize = 400; // Varsayılan Orta Dünya boyutu
    
    let snake = [];
    let food = { x: 5, y: 5 }; // Tüm dünyalara güvenli başlangıç
    let dx = 0;
    let dy = 0;
    let nextDx = 0; // Hızlı tuş basımlarında bug oluşmaması için kuyruk (Queue)
    let nextDy = 0;
    let score = 0;
    let highScore = 0; // F5 ile sıfırlanması için yerel hafızadan çıkarıldı
    let isGameRunning = false;
    let isPaused = false;
    let lastSnake = [];
    
    const speed = 90; // Tık tık hissini bitiren sabit orta/ideal hız
    
    // Performans için requestAnimationFrame değişkenleri
    let lastTime = 0;
    let moveTimer = 0;
    let reqId;
    let particles = [];

    // --- DÜNYA SEÇİM DİNLEYİCİLERİ ---
    worldBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            worldBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            selectedSize = parseInt(e.target.getAttribute('data-size'));
            
            // Menüdeyken terminalin anında esneyip önizleme yapması
            canvas.width = selectedSize;
            canvas.height = selectedSize;
            tileCount = selectedSize / gridSize; // Duvar Sınırlarını önizleme için uyarla
            const wrapper = document.querySelector('.canvas-wrapper');
            const gHeader = document.querySelector('.game-header');
            if (wrapper) wrapper.style.maxWidth = selectedSize + 'px';
            if (gHeader) gHeader.style.maxWidth = selectedSize + 'px';
            if (!gameContainer.classList.contains('maximized')) gameContainer.style.maxWidth = (selectedSize + 50) + 'px';
            
            // Önizleme için boş ızgarayı çiz
            if (!isGameRunning) {
                for (let i = 0; i < tileCount; i++) {
                    for (let j = 0; j < tileCount; j++) {
                        ctx.fillStyle = (i + j) % 2 === 0 ? '#0b1120' : '#111827';
                        ctx.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
                    }
                }
            }
        });
    });

    // --- EN YÜKSEK SKOR RENK DİNAMİĞİ ---
    function updateHighScoreDisplay() {
        if (!highScoreEl) return;
        highScoreEl.textContent = highScore;
        
        const badge = highScoreEl.closest('.high-score-badge');
        if (!badge) return;

        if (highScore <= 5) {
            badge.style.color = '#ff5f56'; badge.style.borderColor = 'rgba(255, 95, 86, 0.25)'; badge.style.background = 'rgba(255, 95, 86, 0.1)';
            highScoreEl.style.textShadow = '0 0 10px rgba(255, 95, 86, 0.5)';
        } else if (highScore <= 10) {
            badge.style.color = '#ffbd2e'; badge.style.borderColor = 'rgba(255, 189, 46, 0.25)'; badge.style.background = 'rgba(255, 189, 46, 0.1)';
            highScoreEl.style.textShadow = '0 0 10px rgba(255, 189, 46, 0.5)';
        } else {
            badge.style.color = '#27c93f'; badge.style.borderColor = 'rgba(39, 201, 63, 0.25)'; badge.style.background = 'rgba(39, 201, 63, 0.1)';
            highScoreEl.style.textShadow = '0 0 10px rgba(39, 201, 63, 0.5)';
        }
    }

    updateHighScoreDisplay();

    // --- YEM PARTİKÜLLERİ (KIVILCIM) ---
    function createParticles(x, y) {
        const particleCount = 15 + Math.min(score, 20); // Skor arttıkça daha büyük patlama
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1.0,
                decay: Math.random() * 0.04 + 0.02
            });
        }
    }

    function initGame() {
        // Seçilen Dünya boyutunu Canvas'ın iç çözünürlüğüne uygula
        canvas.width = selectedSize;
        canvas.height = selectedSize;
        tileCount = selectedSize / gridSize; // Duvar Sınırlarını yeni dünyaya uyarla

        // Görsel boyutu (CSS) de seçilen dünyaya göre esnetelim
        const wrapper = document.querySelector('.canvas-wrapper');
        const gHeader = document.querySelector('.game-header');
        if (wrapper) wrapper.style.maxWidth = selectedSize + 'px';
        if (gHeader) gHeader.style.maxWidth = selectedSize + 'px';
        if (!gameContainer.classList.contains('maximized')) gameContainer.style.maxWidth = (selectedSize + 50) + 'px';

        snake = [
            { x: 7, y: 10 },
            { x: 7, y: 11 },
            { x: 7, y: 12 }
        ];
        dx = 0; dy = -1; 
        nextDx = 0; nextDy = -1;
        score = 0;
        scoreEl.textContent = score;
        lastSnake = JSON.parse(JSON.stringify(snake));
        particles = [];
        gameContainer.classList.remove('shake-animation');
        
        if (menuOverlay) menuOverlay.style.display = 'none';
        gameOverlay.style.display = 'none';
        placeFood();
        isGameRunning = true;
        isPaused = false;
        
        playSound('start'); // Başlama sesi oynat
        
        if (reqId) cancelAnimationFrame(reqId);
        lastTime = performance.now();
        gameLoop(lastTime);
    }

    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        gameContainer.style.display = 'flex';
        if (menuOverlay) menuOverlay.style.display = 'flex';
        if (gameOverlay) gameOverlay.style.display = 'none';
        
        // Audio API ilk etkileşimi beklediği için butonla beraber boot ediyoruz
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        // Seçili haritanın önizlemesi için terminal boyutunu ayarla
        canvas.width = selectedSize;
        canvas.height = selectedSize;
        tileCount = selectedSize / gridSize;
        const wrapper = document.querySelector('.canvas-wrapper');
        const gHeader = document.querySelector('.game-header');
        if (wrapper) wrapper.style.maxWidth = selectedSize + 'px';
        if (gHeader) gHeader.style.maxWidth = selectedSize + 'px';
        if (!gameContainer.classList.contains('maximized')) gameContainer.style.maxWidth = (selectedSize + 50) + 'px';
    });
    
    // Kullanıcı harita seçtikten sonra Oyuna Başlama Emri
    if (confirmStartBtn) confirmStartBtn.addEventListener('click', () => initGame());
    
    // Oyun İçi Restart Butonu
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            initGame();
        });
    }
    
    // Oyun Bitiş Ekranında Harita Değiştir Butonu
    if (changeMapBtn) {
        changeMapBtn.addEventListener('click', () => {
            if (gameOverlay) gameOverlay.style.display = 'none';
            if (menuOverlay) menuOverlay.style.display = 'flex';
        });
    }
    
    // Terminal Etkileşimleri
    if (gtClose) {
        gtClose.addEventListener('click', () => {
            isGameRunning = false;
            isPaused = false;
            if (reqId) cancelAnimationFrame(reqId);
            gameContainer.style.display = 'none';
            startBtn.style.display = 'inline-flex';
            gameContainer.classList.remove('maximized', 'minimized');
            gameOverlay.style.display = 'none';
            if (menuOverlay) menuOverlay.style.display = 'none';
        });
    }
    if (gtMin) gtMin.addEventListener('click', () => {
        gameContainer.classList.toggle('minimized');
        isPaused = gameContainer.classList.contains('minimized'); // Küçültüldüğünde zamanı durdur
    });
    if (gtMax) gtMax.addEventListener('click', () => gameContainer.classList.toggle('maximized'));

    function gameLoop(time) {
        reqId = requestAnimationFrame(gameLoop);
        const dt = time - lastTime;
        lastTime = time;

        if (isPaused) return; // Oyun küçültülmüşse hesaplamaları dondur (Bug çözümü)
        
        // Partikülleri güncelle
        const timeScale = dt / 16; // 60 FPS standardizasyonu
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.x += p.vx * timeScale;
            p.y += p.vy * timeScale;
            p.life -= p.decay * timeScale;
            if (p.life <= 0) particles.splice(i, 1);
        }

        if (isGameRunning) {
            moveTimer += dt;
            
            if (moveTimer >= speed) {
                updateLogic();
                moveTimer -= speed; // Kusursuz zamanlama koruması
            }
        }
        draw(time);
    }

    function updateLogic() {
        lastSnake = JSON.parse(JSON.stringify(snake)); // Eski konumu kaydet (Animasyon için)
        
        // Yönü güncelle (Çift tıklama bug'ını önler)
        dx = nextDx; 
        dy = nextDy;

        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Duvarlara Çarpma (Ölüm)
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            gameOver();
            return;
        }

        // Kendine Çarpma (Ölüm)
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                gameOver();
                return;
            }
        }

        snake.unshift(head); 

        // Yem yeme kontrolü
        if (head.x === food.x && head.y === food.y) {
            score += 1;
            createParticles(food.x * gridSize + gridSize/2, food.y * gridSize + gridSize/2);
            playSound('eat'); // Mükemmel yem sesi!
            scoreEl.textContent = score;
            if (score > highScore) {
                highScore = score;
                updateHighScoreDisplay();
            }
            placeFood();
        } else {
            snake.pop(); 
        }
    }

    function draw(time) {
        // Çizim interpolasyonu (Akıcı, donmayan kayma hissi)
        const ratio = isGameRunning ? Math.min(moveTimer / speed, 1) : 1;

        // 1. Zemin: Klasik Damalı (Checkerboard) Arka Plan
        for (let i = 0; i < tileCount; i++) {
            for (let j = 0; j < tileCount; j++) {
                ctx.fillStyle = (i + j) % 2 === 0 ? '#0b1120' : '#111827';
                ctx.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
            }
        }

        // 2. Yem Çizimi (Neon Kırmızı Elma)
        const pulse = Math.abs(Math.sin(time / 250)) * 0.3 + 0.7; 
        ctx.fillStyle = `rgba(255, 95, 86, ${pulse})`;
        ctx.shadowColor = '#ff5f56';
        ctx.shadowBlur = 15 * pulse;
        
        const fSize = (gridSize - 4) * pulse;
        ctx.beginPath();
        ctx.arc(food.x * gridSize + gridSize/2, food.y * gridSize + gridSize/2, fSize/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Sıfırla

        // 2.5 Partikülleri Çiz (Kıvılcımlar)
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.life * 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 210, 255, ${p.life})`;
            ctx.shadowBlur = 10 * p.life;
            ctx.shadowColor = `rgba(0, 210, 255, ${p.life})`;
            ctx.fill();
        });
        ctx.shadowBlur = 0;

        // 3. Yılan Çizimi (Yuvarlatılmış Neon Bloklar)
        snake.forEach((part, index) => {
            let pPrev = lastSnake[index] || part;
            let px = pPrev.x + (part.x - pPrev.x) * ratio;
            let py = pPrev.y + (part.y - pPrev.y) * ratio;

            const isHead = index === 0;
            
            ctx.fillStyle = isHead ? '#ffffff' : '#00d2ff';
            ctx.shadowColor = isHead ? '#ffffff' : '#00d2ff';
            ctx.shadowBlur = isHead ? 20 : 10;

            // Gövde blokları
            ctx.beginPath();
            if (ctx.roundRect) { // Modern tarayıcılar için köşesi yumuşak bloklar
                ctx.roundRect(px * gridSize + 2, py * gridSize + 2, gridSize - 4, gridSize - 4, 6);
            } else {
                ctx.rect(px * gridSize + 2, py * gridSize + 2, gridSize - 4, gridSize - 4);
            }
            ctx.fill();

            // Kafaya 2 adet tatlı göz ekleyelim (Yöne doğru bakar)
            if (isHead) {
                ctx.fillStyle = '#0f172a'; // Göz rengi
                ctx.shadowBlur = 0;
                
                const cx = px * gridSize + gridSize/2;
                const cy = py * gridSize + gridSize/2;
                const eyeDist = 4;
                let eye1X = cx, eye1Y = cy, eye2X = cx, eye2Y = cy;

                if (dx === 1) { eye1X = cx + 2; eye1Y = cy - eyeDist; eye2X = cx + 2; eye2Y = cy + eyeDist; } 
                else if (dx === -1) { eye1X = cx - 2; eye1Y = cy - eyeDist; eye2X = cx - 2; eye2Y = cy + eyeDist; } 
                else if (dy === 1) { eye1X = cx - eyeDist; eye1Y = cy + 2; eye2X = cx + eyeDist; eye2Y = cy + 2; } 
                else { eye1X = cx - eyeDist; eye1Y = cy - 2; eye2X = cx + eyeDist; eye2Y = cy - 2; }

                ctx.beginPath(); ctx.arc(eye1X, eye1Y, 2, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(eye2X, eye2Y, 2, 0, Math.PI*2); ctx.fill();
            }
        });
        ctx.shadowBlur = 0; // Sıfırla
    }

    function placeFood() {
        let valid = false;
        while (!valid) {
            food = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount)
            };
            valid = true;
            for (let part of snake) {
                if (part.x === food.x && part.y === food.y) {
                    valid = false;
                    break;
                }
            }
        }
    }

    function gameOver() {
        isGameRunning = false;
        playSound('die'); // Mükemmel Çöküş sesi!
        gameOverlay.style.display = 'flex';
        gameContainer.classList.add('shake-animation'); // Terminal Sarsıntısı
        setTimeout(() => gameContainer.classList.remove('shake-animation'), 500);
        const lang = localStorage.getItem('portfolio_lang') || 'tr';
        restartBtn.querySelector('span').innerHTML = lang === 'tr' ? 'Sistemi Yeniden Başlat ↻' : 'Reboot System ↻';
    }

    // Yön Tuşları (Oklar) sayfayı kaydırmasın diye
    window.addEventListener('keydown', (e) => {
        const keysToPrevent = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'];
        if (keysToPrevent.includes(e.key) && isGameRunning) {
            e.preventDefault();
        }
    }, { passive: false });

    // Klavye Kontrolleri
    document.addEventListener('keydown', (e) => {
        if (!isGameRunning || isPaused) return; // Oyun donmuşsa yön alma
        const key = e.key.toLowerCase();
        if ((key === 'arrowup' || key === 'w') && dy !== 1) { nextDx = 0; nextDy = -1; }
        if ((key === 'arrowdown' || key === 's') && dy !== -1) { nextDx = 0; nextDy = 1; }
        if ((key === 'arrowleft' || key === 'a') && dx !== 1) { nextDx = -1; nextDy = 0; }
        if ((key === 'arrowright' || key === 'd') && dx !== -1) { nextDx = 1; nextDy = 0; }
    });

    // Mobil Dokunmatik Buton Kontrolleri
    const btnUp = document.querySelector('.btn-up');
    const btnDown = document.querySelector('.btn-down');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    if (btnUp) btnUp.addEventListener('click', () => { if (dy !== 1) { nextDx = 0; nextDy = -1; } });
    if (btnDown) btnDown.addEventListener('click', () => { if (dy !== -1) { nextDx = 0; nextDy = 1; } });
    if (btnLeft) btnLeft.addEventListener('click', () => { if (dx !== 1) { nextDx = -1; nextDy = 0; } });
    if (btnRight) btnRight.addEventListener('click', () => { if (dx !== -1) { nextDx = 1; nextDy = 0; } });
});
