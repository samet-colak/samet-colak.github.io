// ==========================================================================
// 404.JS - NEXT-GEN MECHA-SNAKE ENGINE & 3D CYBER HERO VISUALS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // SNAKE.EXE OYUN MOTORU
    // --------------------------------------------------------------------------
    const startBtn = document.getElementById('start-game-btn');
    const gameContainer = document.getElementById('game-container');
    const canvas = document.getElementById('gameCanvas');
    if (!startBtn || !canvas) return;

    const ctx = canvas.getContext('2d');
    const scoreEl = document.getElementById('score');
    const highScoreEl = document.getElementById('high-score');
    const comboDisplay = document.getElementById('combo-display');
    const comboValEl = document.getElementById('combo-val');
    const soundToggleBtn = document.getElementById('sound-toggle-btn');
    const soundIcon = document.getElementById('sound-icon');
    
    // Katmanlar (Overlays)
    const menuOverlay = document.getElementById('menu-overlay');
    const pauseOverlay = document.getElementById('pause-overlay');
    const gameOverlay = document.getElementById('game-overlay');
    const confirmStartBtn = document.getElementById('confirm-start-btn');
    const restartBtn = document.getElementById('restart-game-btn');
    const changeMapBtn = document.getElementById('change-map-btn');
    const worldBtns = document.querySelectorAll('.w-btn');

    // Görev Sonu Debrief Elementleri
    const debriefScore = document.getElementById('debrief-score');
    const debriefFood = document.getElementById('debrief-food');
    const debriefCombo = document.getElementById('debrief-combo');

    // Terminal Pencere Butonları
    const gtClose = document.getElementById('gt-close');
    const gtMin = document.getElementById('gt-min');
    const gtMax = document.getElementById('gt-max');

    // Mobil Butonlar
    const btnUp = document.querySelector('.btn-up');
    const btnDown = document.querySelector('.btn-down');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    // --- SES MOTORU (WEB AUDIO API SYNTHESIZER) ---
    let audioCtx = null;
    let isMuted = localStorage.getItem('mecha_snake_muted') === 'true';

    function updateSoundBtn() {
        if (soundIcon) soundIcon.textContent = isMuted ? '🔇' : '🔊';
        if (soundToggleBtn) soundToggleBtn.setAttribute('title', isMuted ? 'Sesi Aç' : 'Sesi Kapat');
    }
    updateSoundBtn();

    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            localStorage.setItem('mecha_snake_muted', isMuted);
            updateSoundBtn();
            if (!isMuted) playSynth('click');
        });
    }

    function initAudio() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    function playSynth(type, extra = 1) {
        if (isMuted) return;
        try {
            initAudio();
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            if (type === 'eat') {
                // Enerji çekirdeği alma melodisi
                const baseFreq = 520 + Math.min(extra, 5) * 80;
                osc.type = 'sine';
                osc.frequency.setValueAtTime(baseFreq, now);
                osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, now + 0.1);
                gain.gain.setValueAtTime(0.25, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.start(now);
                osc.stop(now + 0.12);
            } else if (type === 'gold_eat') {
                // Altın Kuantum çekirdeği süper akor
                const notes = [587.33, 739.99, 880, 1174.66];
                notes.forEach((freq, i) => {
                    const o = audioCtx.createOscillator();
                    const g = audioCtx.createGain();
                    o.connect(g);
                    g.connect(audioCtx.destination);
                    o.type = 'triangle';
                    o.frequency.setValueAtTime(freq, now + i * 0.04);
                    g.gain.setValueAtTime(0.2, now + i * 0.04);
                    g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.2);
                    o.start(now + i * 0.04);
                    o.stop(now + i * 0.04 + 0.2);
                });
            } else if (type === 'combo') {
                osc.type = 'sawtooth';
                const freq = 660 + extra * 120;
                osc.frequency.setValueAtTime(freq, now);
                osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.14);
                gain.gain.setValueAtTime(0.18, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
                osc.start(now);
                osc.stop(now + 0.14);
            } else if (type === 'die') {
                // Derin sub-bass sarsıntı & çöküş
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(30, now + 0.45);
                gain.gain.setValueAtTime(0.35, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
                osc.start(now);
                osc.stop(now + 0.45);
            } else if (type === 'start') {
                osc.type = 'square';
                osc.frequency.setValueAtTime(260, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
                osc.start(now);
                osc.stop(now + 0.2);
            } else if (type === 'pause') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.exponentialRampToValueAtTime(220, now + 0.1);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
            } else if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            }
        } catch (err) {
            // Audio API fallback
        }
    }

    // --- OYUN DEĞİŞKENLERİ VE YAPILANDIRMASI ---
    const gridSize = 20;
    let selectedSize = 400; // 300, 400, 500
    let tileCount = selectedSize / gridSize;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let snake = [];
    let lastSnake = [];
    let food = { x: 5, y: 5, isGold: false, timer: 0 };
    let dx = 0, dy = -1;
    let nextDx = 0, nextDy = -1;

    let score = 0;
    let highScore = parseInt(localStorage.getItem('mecha_snake_highscore') || '0', 10);
    let totalFoodEaten = 0;
    let combo = 0;
    let maxCombo = 0;
    let lastEatTime = 0;

    let isGameRunning = false;
    let isPaused = false;
    const baseSpeed = 85; // ms per tick

    let lastTime = 0;
    let moveTimer = 0;
    let reqId = null;

    // Görsel Efekt Havuzları
    let particles = [];
    let floatingTexts = [];

    // --- RETINA / HiDPI CANVAS BOYUTLANDIRMA MOTORU ---
    function setupCanvasDpi() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = selectedSize * dpr;
        canvas.height = selectedSize * dpr;
        canvas.style.width = selectedSize + 'px';
        canvas.style.height = selectedSize + 'px';
        ctx.scale(dpr, dpr);
        tileCount = selectedSize / gridSize;

        const wrapper = document.querySelector('.canvas-wrapper');
        const gHeader = document.querySelector('.game-header');
        if (wrapper) wrapper.style.maxWidth = selectedSize + 'px';
        if (gHeader) gHeader.style.maxWidth = selectedSize + 'px';
        if (!gameContainer.classList.contains('maximized')) {
            gameContainer.style.maxWidth = (selectedSize + 60) + 'px';
        }
    }

    // Harita Boyut Seçimi Dinleyicileri
    worldBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            worldBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            selectedSize = parseInt(e.currentTarget.getAttribute('data-size'), 10);
            setupCanvasDpi();
            playSynth('click');

            // Önizleme ızgarası
            if (!isGameRunning) drawGrid();
        });
    });

    function updateHighScoreDisplay() {
        if (highScoreEl) highScoreEl.textContent = highScore;
    }
    updateHighScoreDisplay();

    // --- PARTİKÜL VE YÜZEN SKOR SİSTEMİ ---
    function addExplosion(x, y, isGold) {
        const count = isGold ? 32 : 18;
        const colorPalette = isGold 
            ? ['#facc15', '#fef08a', '#ea580c', '#ffffff'] 
            : ['#00d2ff', '#38bdf8', '#818cf8', '#ffffff'];

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * (isGold ? 5.5 : 3.8) + 1;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
                size: Math.random() * (isGold ? 4 : 3) + 1.5,
                life: 1.0,
                decay: Math.random() * 0.035 + 0.02
            });
        }
    }

    function addFloatingText(text, x, y, color) {
        floatingTexts.push({
            text: text,
            x: x,
            y: y,
            color: color,
            life: 1.0,
            vy: -1.2
        });
    }

    // --- YENİ OYUN BAŞLATMA (INIT) ---
    function initGame() {
        setupCanvasDpi();

        const midX = Math.floor(tileCount / 2);
        const midY = Math.floor(tileCount / 2);
        snake = [
            { x: midX, y: midY },
            { x: midX, y: midY + 1 },
            { x: midX, y: midY + 2 }
        ];
        lastSnake = JSON.parse(JSON.stringify(snake));

        dx = 0; dy = -1;
        nextDx = 0; nextDy = -1;
        score = 0;
        combo = 0;
        maxCombo = 0;
        totalFoodEaten = 0;
        lastEatTime = 0;
        particles = [];
        floatingTexts = [];

        if (scoreEl) scoreEl.textContent = '0';
        if (comboDisplay) {
            comboDisplay.style.opacity = '0';
            comboDisplay.style.transform = 'scale(0.8)';
        }

        if (menuOverlay) menuOverlay.style.display = 'none';
        if (pauseOverlay) pauseOverlay.style.display = 'none';
        if (gameOverlay) gameOverlay.style.display = 'none';
        gameContainer.classList.remove('shake-animation');

        placeFood();
        isGameRunning = true;
        isPaused = false;

        playSynth('start');

        if (reqId) cancelAnimationFrame(reqId);
        lastTime = performance.now();
        moveTimer = 0;
        gameLoop(lastTime);
    }

    // --- YEM KONUMLANDIRMA (STANDART VE ALTIN ÇEKİRDEK) ---
    function placeFood() {
        let valid = false;
        let attempts = 0;
        while (!valid && attempts < 200) {
            food.x = Math.floor(Math.random() * tileCount);
            food.y = Math.floor(Math.random() * tileCount);
            valid = true;
            for (let part of snake) {
                if (part.x === food.x && part.y === food.y) {
                    valid = false;
                    break;
                }
            }
            attempts++;
        }

        // %22 ihtimalle Altın Süper Kuantum Çekirdeği
        food.isGold = Math.random() < 0.22 && score >= 20;
        food.timer = food.isGold ? 12 : 0; // 12 saniye geri sayım
    }

    // --- DÖNGÜ VE ZAMANLAMA ---
    function gameLoop(time) {
        reqId = requestAnimationFrame(gameLoop);
        const dt = Math.min(time - lastTime, 100); // Tab geçişlerindeki dev sıçramaları önler
        lastTime = time;

        if (isPaused) {
            draw(time);
            return;
        }

        // Partikülleri güncelle
        const timeScale = dt / 16.67;
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx * timeScale;
            p.y += p.vy * timeScale;
            p.vx *= 0.96;
            p.vy *= 0.96;
            p.life -= p.decay * timeScale;
            if (p.life <= 0) particles.splice(i, 1);
        }

        // Yüzen skor yazılarını güncelle
        for (let i = floatingTexts.length - 1; i >= 0; i--) {
            const ft = floatingTexts[i];
            ft.y += ft.vy * timeScale;
            ft.life -= 0.022 * timeScale;
            if (ft.life <= 0) floatingTexts.splice(i, 1);
        }

        // Altın çekirdek süresi
        if (food.isGold) {
            food.timer -= dt / 1000;
            if (food.timer <= 0) {
                food.isGold = false;
            }
        }

        // Kombo zaman aşımı (3.2 saniye)
        if (combo > 0 && performance.now() - lastEatTime > 3200) {
            combo = 0;
            if (comboDisplay) {
                comboDisplay.style.opacity = '0';
                comboDisplay.style.transform = 'scale(0.8)';
            }
        }

        if (isGameRunning) {
            moveTimer += dt;
            if (moveTimer >= baseSpeed) {
                updateLogic();
                moveTimer -= baseSpeed;
            }
        }

        draw(time);
    }

    // --- OYUN MANTIĞI GÜNCELLEMESİ ---
    function updateLogic() {
        lastSnake = JSON.parse(JSON.stringify(snake));
        dx = nextDx;
        dy = nextDy;

        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Duvara Çarpma
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            gameOver();
            return;
        }

        // Kendine Çarpma
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                gameOver();
                return;
            }
        }

        snake.unshift(head);

        // Yem Yeme
        if (head.x === food.x && head.y === food.y) {
            const now = performance.now();
            if (now - lastEatTime <= 3200) {
                combo++;
            } else {
                combo = 1;
            }
            lastEatTime = now;
            if (combo > maxCombo) maxCombo = combo;

            const isGold = food.isGold;
            const basePoints = isGold ? 25 : 10;
            const multiplier = Math.min(combo, 5);
            const earnedPoints = basePoints * multiplier;

            score += earnedPoints;
            totalFoodEaten++;
            if (scoreEl) scoreEl.textContent = score;

            // Kombo UI
            if (combo > 1 && comboDisplay && comboValEl) {
                comboValEl.textContent = `x${combo}`;
                comboDisplay.style.opacity = '1';
                comboDisplay.style.transform = 'scale(1.15)';
                setTimeout(() => {
                    if (comboDisplay) comboDisplay.style.transform = 'scale(1)';
                }, 180);
            }

            if (score > highScore) {
                highScore = score;
                localStorage.setItem('mecha_snake_highscore', highScore);
                updateHighScoreDisplay();
            }

            const foodCenterX = food.x * gridSize + gridSize / 2;
            const foodCenterY = food.y * gridSize + gridSize / 2;

            addExplosion(foodCenterX, foodCenterY, isGold);

            if (isGold) {
                addFloatingText(`+${earnedPoints} KUANTUM!`, foodCenterX, foodCenterY - 10, '#facc15');
                playSynth('gold_eat');
            } else {
                addFloatingText(`+${earnedPoints}${combo > 1 ? ' KOMBO!' : ''}`, foodCenterX, foodCenterY - 10, '#38bdf8');
                playSynth(combo > 1 ? 'combo' : 'eat', combo);
            }

            // Hafif tatlı ekran sarsıntısı
            gameContainer.classList.remove('shake-animation');
            void gameContainer.offsetWidth; // Reflow
            if (isGold) gameContainer.classList.add('shake-animation');

            placeFood();
        } else {
            snake.pop();
        }
    }

    // --- ÇİZİM MOTORU (RETINA ALIEN-GRADE RENDER) ---
    function drawGrid() {
        ctx.fillStyle = '#070b14';
        ctx.fillRect(0, 0, selectedSize, selectedSize);

        ctx.strokeStyle = 'rgba(0, 210, 255, 0.04)';
        ctx.lineWidth = 1;

        for (let x = 0; x <= selectedSize; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, selectedSize);
            ctx.stroke();
        }
        for (let y = 0; y <= selectedSize; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(selectedSize, y);
            ctx.stroke();
        }
    }

    function draw(time) {
        const ratio = isGameRunning ? Math.min(moveTimer / baseSpeed, 1) : 1;

        // 1. Siber Izgara Zemin
        drawGrid();

        // 2. Kuantum Enerji Çekirdeği (Food)
        const fx = food.x * gridSize + gridSize / 2;
        const fy = food.y * gridSize + gridSize / 2;
        const pulse = Math.sin(time / 220) * 0.18 + 0.82;
        const rot = time / 600;

        ctx.save();
        ctx.translate(fx, fy);

        if (food.isGold) {
            // ALTIN SÜPER ÇEKİRDEK
            ctx.shadowColor = '#facc15';
            ctx.shadowBlur = 20 * pulse;

            // Dönen Dış Halka
            ctx.strokeStyle = `rgba(250, 204, 21, ${pulse})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, (gridSize / 2 + 1) * pulse, 0, Math.PI * 2);
            ctx.stroke();

            // Yörünge Elektronları
            for (let i = 0; i < 3; i++) {
                const angle = rot * 2 + (i * Math.PI * 2) / 3;
                const ex = Math.cos(angle) * (gridSize / 2 + 1);
                const ey = Math.sin(angle) * (gridSize / 2 + 1);
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(ex, ey, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Merkez Çekirdek
            ctx.fillStyle = '#fde047';
            ctx.beginPath();
            ctx.arc(0, 0, (gridSize / 3) * pulse, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // STANDART ENERJİ ÇEKİRDEĞİ (Neon Camgöbeği)
            ctx.shadowColor = '#00d2ff';
            ctx.shadowBlur = 14 * pulse;

            // Dönen Halka
            ctx.strokeStyle = `rgba(0, 210, 255, ${0.4 * pulse})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(0, 0, (gridSize / 2) * pulse, 0, Math.PI * 2);
            ctx.stroke();

            // Yörüngede dönen 2 siber nokta
            for (let i = 0; i < 2; i++) {
                const angle = rot + i * Math.PI;
                const ex = Math.cos(angle) * (gridSize / 2);
                const ey = Math.sin(angle) * (gridSize / 2);
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(ex, ey, 1.8, 0, Math.PI * 2);
                ctx.fill();
            }

            // Kristal Merkez
            ctx.fillStyle = '#00d2ff';
            ctx.beginPath();
            ctx.arc(0, 0, (gridSize / 3.4) * pulse, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
        ctx.shadowBlur = 0;

        // 3. MEKA-YILAN ÇİZİMİ (CYBER MECHA SERPENT)
        const snakeLen = snake.length;

        // Gövde bağlantı omurgası (Connecting energy line)
        if (snakeLen > 1) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 210, 255, 0.25)';
            ctx.lineWidth = 3;
            for (let i = 0; i < snakeLen; i++) {
                const part = snake[i];
                const pPrev = lastSnake[i] || part;
                const px = (pPrev.x + (part.x - pPrev.x) * ratio) * gridSize + gridSize / 2;
                const py = (pPrev.y + (part.y - pPrev.y) * ratio) * gridSize + gridSize / 2;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
        }

        // Segmentleri çiz (Kuyruktan başa doğru)
        for (let i = snakeLen - 1; i >= 0; i--) {
            const part = snake[i];
            const pPrev = lastSnake[i] || part;
            const px = pPrev.x + (part.x - pPrev.x) * ratio;
            const py = pPrev.y + (part.y - pPrev.y) * ratio;
            const isHead = i === 0;

            const t = i / Math.max(snakeLen - 1, 1); // 0 (baş) -> 1 (kuyruk)

            ctx.save();
            ctx.translate(px * gridSize, py * gridSize);

            if (isHead) {
                // MEKA KAFA
                ctx.shadowColor = '#00d2ff';
                ctx.shadowBlur = 18;

                // Kafa Zırhı
                ctx.fillStyle = '#0284c7';
                if (ctx.roundRect) {
                    ctx.beginPath();
                    ctx.roundRect(1.5, 1.5, gridSize - 3, gridSize - 3, 6);
                    ctx.fill();
                } else {
                    ctx.fillRect(1.5, 1.5, gridSize - 3, gridSize - 3);
                }

                // Üst Meka Plaka
                ctx.fillStyle = '#38bdf8';
                if (ctx.roundRect) {
                    ctx.beginPath();
                    ctx.roundRect(3.5, 3.5, gridSize - 7, gridSize - 7, 4);
                    ctx.fill();
                }

                // Vizör ve Göz Sensörleri (Gidilen yöne bakar)
                ctx.shadowColor = '#ffffff';
                ctx.shadowBlur = 8;
                ctx.fillStyle = '#ffffff';

                const cx = gridSize / 2;
                const cy = gridSize / 2;
                const eyeSpread = 4.5;
                let e1x = cx, e1y = cy, e2x = cx, e2y = cy;

                if (dx === 1) { // Sağa
                    e1x = cx + 3; e1y = cy - eyeSpread;
                    e2x = cx + 3; e2y = cy + eyeSpread;
                } else if (dx === -1) { // Sola
                    e1x = cx - 3; e1y = cy - eyeSpread;
                    e2x = cx - 3; e2y = cy + eyeSpread;
                } else if (dy === 1) { // Aşağı
                    e1x = cx - eyeSpread; e1y = cy + 3;
                    e2x = cx + eyeSpread; e2y = cy + 3;
                } else { // Yukarı
                    e1x = cx - eyeSpread; e1y = cy - 3;
                    e2x = cx + eyeSpread; e2y = cy - 3;
                }

                ctx.beginPath();
                ctx.arc(e1x, e1y, 2, 0, Math.PI * 2);
                ctx.arc(e2x, e2y, 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // GÖVDE SEGMENTLERİ (Elektrik Mavisi -> Neon Mor Degrade)
                const r = Math.round(0 + t * 147);
                const g = Math.round(210 - t * 150);
                const b = Math.round(255 - t * 20);
                const segColor = `rgb(${r}, ${g}, ${b})`;

                ctx.shadowColor = segColor;
                ctx.shadowBlur = 8 * (1 - t * 0.5);

                const pad = 2.5 + t * 1.5; // Kuyruğa doğru hafif incelme
                const size = gridSize - pad * 2;

                ctx.fillStyle = segColor;
                if (ctx.roundRect) {
                    ctx.beginPath();
                    ctx.roundRect(pad, pad, size, size, 5);
                    ctx.fill();
                } else {
                    ctx.fillRect(pad, pad, size, size);
                }

                // Segment İçi Kuantum Çekirdek Noktası
                ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
                ctx.beginPath();
                ctx.arc(gridSize / 2, gridSize / 2, Math.max(1.8 - t * 0.8, 0.8), 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
            ctx.shadowBlur = 0;
        }

        // 4. Kıvılcım Partikülleri
        particles.forEach(p => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(p.size * p.life, 0.5), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(p.life, 0);
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8 * p.life;
            ctx.fill();
            ctx.restore();
        });

        // 5. Yüzen Skor Yazıları
        floatingTexts.forEach(ft => {
            ctx.save();
            ctx.font = 'bold 12px "Roboto Mono", monospace';
            ctx.fillStyle = ft.color;
            ctx.globalAlpha = Math.max(ft.life, 0);
            ctx.shadowColor = ft.color;
            ctx.shadowBlur = 10 * ft.life;
            ctx.textAlign = 'center';
            ctx.fillText(ft.text, ft.x, ft.y);
            ctx.restore();
        });
    }

    // --- GAME OVER & GÖREV DEBRİFİNGİ ---
    function gameOver() {
        isGameRunning = false;
        playSynth('die');

        if (debriefScore) debriefScore.textContent = score;
        if (debriefFood) debriefFood.textContent = totalFoodEaten;
        if (debriefCombo) debriefCombo.textContent = `x${Math.max(maxCombo, 1)}`;

        if (gameOverlay) gameOverlay.style.display = 'flex';
        gameContainer.classList.add('shake-animation');
        setTimeout(() => gameContainer.classList.remove('shake-animation'), 450);
    }

    // --- DURAKLATMA (PAUSE / RESUME) ---
    function togglePause() {
        if (!isGameRunning) return;
        isPaused = !isPaused;
        playSynth('pause');
        if (pauseOverlay) {
            pauseOverlay.style.display = isPaused ? 'flex' : 'none';
        }
    }

    // --- ETKİLEŞİM VE DİNLEYİCİLER ---
    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        gameContainer.style.display = 'flex';
        if (menuOverlay) menuOverlay.style.display = 'flex';
        if (gameOverlay) gameOverlay.style.display = 'none';
        if (pauseOverlay) pauseOverlay.style.display = 'none';

        initAudio();
        setupCanvasDpi();
        drawGrid();
    });

    if (confirmStartBtn) confirmStartBtn.addEventListener('click', () => initGame());
    if (restartBtn) restartBtn.addEventListener('click', () => initGame());
    if (changeMapBtn) {
        changeMapBtn.addEventListener('click', () => {
            if (gameOverlay) gameOverlay.style.display = 'none';
            if (menuOverlay) menuOverlay.style.display = 'flex';
        });
    }

    if (pauseOverlay) {
        pauseOverlay.addEventListener('click', () => togglePause());
    }

    // Terminal Butonları
    if (gtClose) {
        gtClose.addEventListener('click', () => {
            isGameRunning = false;
            isPaused = false;
            if (reqId) cancelAnimationFrame(reqId);
            gameContainer.style.display = 'none';
            startBtn.style.display = 'inline-flex';
            gameContainer.classList.remove('maximized', 'minimized');
            if (gameOverlay) gameOverlay.style.display = 'none';
            if (menuOverlay) menuOverlay.style.display = 'none';
            if (pauseOverlay) pauseOverlay.style.display = 'none';
        });
    }
    if (gtMin) {
        gtMin.addEventListener('click', () => {
            gameContainer.classList.toggle('minimized');
            if (gameContainer.classList.contains('minimized') && isGameRunning && !isPaused) {
                togglePause();
            }
        });
    }
    if (gtMax) {
        gtMax.addEventListener('click', () => {
            gameContainer.classList.toggle('maximized');
            setupCanvasDpi();
        });
    }

    // Klavye Yön ve Duraklatma Kontrolleri
    window.addEventListener('keydown', (e) => {
        const preventKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'w', 'a', 's', 'd'];
        if (preventKeys.includes(e.key) && isGameRunning) {
            e.preventDefault();
        }

        if (e.key === ' ' || e.key.toLowerCase() === 'p') {
            if (isGameRunning) togglePause();
            return;
        }

        if (!isGameRunning || isPaused) return;

        const key = e.key.toLowerCase();
        if ((key === 'arrowup' || key === 'w') && dy !== 1) { nextDx = 0; nextDy = -1; }
        else if ((key === 'arrowdown' || key === 's') && dy !== -1) { nextDx = 0; nextDy = 1; }
        else if ((key === 'arrowleft' || key === 'a') && dx !== 1) { nextDx = -1; nextDy = 0; }
        else if ((key === 'arrowright' || key === 'd') && dx !== -1) { nextDx = 1; nextDy = 0; }
    }, { passive: false });

    // Mobil D-Pad Butonları
    if (btnUp) btnUp.addEventListener('click', () => { if (dy !== 1) { nextDx = 0; nextDy = -1; } });
    if (btnDown) btnDown.addEventListener('click', () => { if (dy !== -1) { nextDx = 0; nextDy = 1; } });
    if (btnLeft) btnLeft.addEventListener('click', () => { if (dx !== 1) { nextDx = -1; nextDy = 0; } });
    if (btnRight) btnRight.addEventListener('click', () => { if (dx !== -1) { nextDx = 1; nextDy = 0; } });

    // Dokunmatik Ekran Swipe (Kaydırma) Desteği
    let touchStartX = 0, touchStartY = 0;
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }
    }, { passive: true });

    canvas.addEventListener('touchend', (e) => {
        if (!isGameRunning || isPaused || e.changedTouches.length === 0) return;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffX) > 25 || Math.abs(diffY) > 25) {
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0 && dx !== -1) { nextDx = 1; nextDy = 0; }
                else if (diffX < 0 && dx !== 1) { nextDx = -1; nextDy = 0; }
            } else {
                if (diffY > 0 && dy !== -1) { nextDx = 0; nextDy = 1; }
                else if (diffY < 0 && dy !== 1) { nextDx = 0; nextDy = -1; }
            }
        }
    }, { passive: true });
});
