// --- YAZIP SİLİNME (TYPEWRITER) ANİMASYONU ---
const typeStrings = {
    tr: ["Yazılım Geliştiricisi", "Lise Öğrencisi", "Web Tasarımcısı", "Teknoloji Tutkunu"],
    en: ["Software Developer", "High School Student", "Web Designer", "Tech Enthusiast"]
};

const typingTextElement = document.querySelector('.typing-text');
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout;

function typeEffect() {
    if (!typingTextElement) return;

    // currentLang, script.js içinden global olarak gelir.
    const currentLangStrings = typeStrings[currentLang || 'tr'];
    
    if (typeIndex >= currentLangStrings.length) {
        typeIndex = 0;
    }

    const currentString = currentLangStrings[typeIndex];

    if (isDeleting) {
        typingTextElement.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentString.length) {
        typeSpeed = 2000; // Kelime tam yazılınca bekle
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % currentLangStrings.length;
        typeSpeed = 400; // Silme işlemi bitince bekle
    }

    typeTimeout = setTimeout(typeEffect, typeSpeed);
}

// İlk yüklemede başlat
typeEffect();

// Kullanıcı script.js üzerinden dili değiştirdiğinde, daktiloyu sıfırlayarak uyum sağla
window.addEventListener('langChanged', () => {
    charIndex = 0;
    isDeleting = false;
    clearTimeout(typeTimeout);
    typeEffect();
});

// --- TERMİNAL KODU KOPYALAMA BUTONU ---
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        this.classList.add('copied');
        setTimeout(() => { this.classList.remove('copied'); }, 2000);

        const codeBlock = document.getElementById('code-to-copy') || document.querySelector('.terminal-body code');
        if (codeBlock) {
            const textToCopy = codeBlock.innerText || codeBlock.textContent;

            const fallbackCopy = (text) => {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.top = "-9999px";
                textArea.style.left = "-9999px";
                textArea.style.opacity = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try { document.execCommand('copy'); } catch (err) { console.error('Kopyalama hatası:', err); }
                document.body.removeChild(textArea);
            };

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(textToCopy).catch(() => fallbackCopy(textToCopy));
            } else {
                fallbackCopy(textToCopy);
            }
        }
    });
}

// --- ARKA PLAN ŞEKİLLERİ İÇİN 3D DERİNLİK (PARALLAX SCROLL) ---
const heroBgShapes = document.querySelector('.hero-bg-shapes');
if (heroBgShapes) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroBgShapes.style.transform = `translateY(${scrollY * 0.4}px)`; // Kaydıkça şekiller daha yavaş takip eder
    });
}

// --- SÜRÜKLENEBİLİR TERMİNAL (DRAGGABLE TERMINAL) ---
const terminalWindow = document.getElementById('terminal-window');
const terminalHeader = document.getElementById('terminal-header');
if (terminalWindow && terminalHeader) {
    let isDragging = false;
    let initialX = 0, initialY = 0, currentX = 0, currentY = 0;
    let baseLeft = 0, baseTop = 0, termWidth = 0, termHeight = 0;

    terminalHeader.addEventListener('mousedown', (e) => {
        if (e.target.closest('.terminal-buttons') || e.target.closest('.terminal-actions')) return;
        isDragging = true;
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        
        // Terminalin ve Ekranın mevcut sınırlarını hesapla
        const rect = terminalWindow.getBoundingClientRect();
        baseLeft = rect.left - currentX;
        baseTop = rect.top - currentY;
        termWidth = rect.width;
        termHeight = rect.height;

        terminalWindow.style.transition = 'none'; // Sürüklerken gecikmeyi kapat
        terminalWindow.style.animation = 'none'; // Dalgalanmayı (float) durdur
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        let newX = e.clientX - initialX;
        let newY = e.clientY - initialY;

        // Sınırlandırma Bariyerleri (Ekrana sığacak şekilde sağdan, soldan, üstten ve alttan taşmasını engeller)
        const screenLimitLeft = window.innerWidth > 900 ? document.documentElement.clientWidth / 2 : 10; // Masaüstünde ortada görünmez duvar
        const minX = screenLimitLeft - baseLeft; // Sol tarafa (yazıların üstüne) geçmesini engelleyen bariyer
        const maxX = document.documentElement.clientWidth - termWidth - baseLeft - 10; // Ekranın en sağından dışarı çıkamasın
        const minY = -baseTop + 80; // Üstteki navigasyon çubuğunun altına kadar çıkabilsin
        const maxY = document.documentElement.clientHeight - termHeight - baseTop - 10; // Aşağıya doğru taşmasın

        // Sınırları mevcut sürükleme hesaplamasına zorla uygula
        currentX = Math.max(minX, Math.min(newX, maxX));
        currentY = Math.max(minY, Math.min(newY, maxY));

        terminalWindow.style.left = `${currentX}px`;
        terminalWindow.style.top = `${currentY}px`;
        terminalWindow.style.position = 'relative'; 
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        terminalWindow.style.transition = 'max-width 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease'; // Geçişleri geri ver
    });
}

// --- TERMİNAL: "ÇALIŞTIR" VE "ETKİLEŞİMLİ CLI" ---
const runBtn = document.getElementById('run-btn');
const cliOutput = document.getElementById('cli-output');
const cliInput = document.getElementById('cli-input');
const currentFileName = document.getElementById('current-file-name');

const printToConsole = (text, type = '', delay = 60) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const span = document.createElement('span');
            if (type) span.className = type;
            
            // Animasyon eklentisi (Yavaş ve aşağıdan kayarak beliren çıktı efekti)
            span.style.opacity = '0';
            span.style.transform = 'translateY(10px)';
            span.style.transition = 'all 0.3s ease-out';
            
            span.innerHTML = text; 
            cliOutput.appendChild(span);
            cliOutput.scrollTop = cliOutput.scrollHeight;
            
            // DOM renderını zorla ve animasyonu başlat
            requestAnimationFrame(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            });
            
            resolve();
        }, delay);
    });
};

if (runBtn && cliOutput) {
    runBtn.addEventListener('click', async () => {
        cliOutput.classList.add('active');
        cliOutput.innerHTML = ''; // Temizle
        const fileName = currentFileName ? currentFileName.textContent : 'script';
        
        runBtn.style.opacity = '0.5';
        runBtn.style.pointerEvents = 'none';
        
        await printToConsole(`> Çalıştırılıyor: ${fileName}...`, 'info', 100);
        
        setTimeout(async () => {
            await printToConsole('İşlem Başarılı! [OK]', 'info', 50);
            setTimeout(async () => {
                await printToConsole('', '', 50);
                await printToConsole('ÇIKTI:', 'info', 100);
                
                switch(fileName) {
                    case 'developer.py':
                        await printToConsole("{'name': 'Samet Çolak', 'role': 'Software Developer', 'skills': ['HTML', 'CSS', 'Python', 'C#'], 'ai': True}", '', 150);
                        break;
                    case 'developer.js':
                        await printToConsole('{', '', 100);
                        await printToConsole('&nbsp;&nbsp;name: "Samet Çolak",', '', 100);
                        await printToConsole('&nbsp;&nbsp;role: "Software Developer",', '', 100);
                        await printToConsole('&nbsp;&nbsp;skills: ["HTML", "CSS", "Python", "C#"],', '', 100);
                        await printToConsole('&nbsp;&nbsp;learningAI: true', '', 100);
                        await printToConsole('}', '', 100);
                        break;
                    case 'developer.cs':
                        await printToConsole('Developer Object:', '', 100);
                        await printToConsole('Name: Samet Çolak', '', 100);
                        await printToConsole('Role: Software Developer', '', 100);
                        await printToConsole('Skills: System.String[] { "HTML", "CSS", "Python", "C#" }', '', 100);
                        await printToConsole('LearningAI: True', '', 100);
                        break;
                    case 'developer.html':
                        await printToConsole('DOM Render:', '', 100);
                        await printToConsole(`
                            <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; margin-top: 10px; border: 1px solid rgba(255, 255, 255, 0.1); font-family: 'Poppins', sans-serif;">
                                <h1 style="color: #fff; font-size: 24px; margin-bottom: 5px;">Samet Çolak</h1>
                                <p style="color: #00d2ff; font-size: 14px; font-weight: 600; margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">Software Developer</p>
                                <ul style="color: #cbd5e1; margin-left: 20px; font-size: 14px; line-height: 1.8;">
                                    <li style="list-style-type: disc;">HTML &amp; CSS Uzmanı</li>
                                    <li style="list-style-type: disc;">Python &amp; C# Geliştiricisi</li>
                                </ul>
                            </div>
                        `, '', 200);
                        break;
                    case 'developer.css':
                        await printToConsole('Styles Applied:', '', 100);
                        await printToConsole('<span class="term-keyword">.samet-colak</span> {', '', 100);
                        await printToConsole('&nbsp;&nbsp;<span class="term-property">role</span>: <span class="term-string">"Software Developer"</span>;', '', 100);
                        await printToConsole('&nbsp;&nbsp;<span class="term-property">skills</span>: <span class="term-string">"HTML, CSS, Python, C#"</span>;', '', 100);
                        await printToConsole('&nbsp;&nbsp;<span class="term-property">design</span>: <span class="term-variable">premium</span>;', '', 100);
                        await printToConsole('&nbsp;&nbsp;<span class="term-property">passion</span>: <span class="term-variable">100%</span>;', '', 100);
                        await printToConsole('}', '', 100);
                        await printToConsole('CSS Variables (theme: dark) loaded successfully.', 'info', 200);
                        break;
                    default:
                        await printToConsole('Samet Çolak - Software Developer', '', 100);
                        await printToConsole('Yetkinlikler: HTML, CSS, Python, C#', '', 100);
                        await printToConsole('Durum: Yenilikçi Çözümlere Hazır 🚀', '', 100);
                }
                
                await printToConsole('', '', 100);
                runBtn.style.opacity = '';
                runBtn.style.pointerEvents = '';
            }, 400);
        }, 600);
    });
}

if (cliInput && cliOutput) {
    cliInput.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            const command = cliInput.value.trim().toLowerCase();
            cliInput.value = '';
            if (!command) return;
            
            cliOutput.classList.add('active');
            await printToConsole(`samet@portfolio:~$ ${command}`, '', 50);
            
            switch (command) {
                case 'help':
                    await printToConsole('Kullanılabilir komutlar:', '', 100);
                    await printToConsole('- <span class="info">whoami</span>: Benim hakkımda bilgi verir', '', 100);
                    await printToConsole('- <span class="info">projects</span>: Projeler sayfasına yönlendirir', '', 100);
                    await printToConsole('- <span class="info">contact</span>: İletişim sayfasına yönlendirir', '', 100);
                    await printToConsole('- <span class="info">clear</span>: Konsolu temizler', '', 100);
                    break;
                case 'whoami':
                    await printToConsole('Samet Çolak. Lise Öğrencisi ve Tutkulu bir Yazılım Geliştirici.', '', 100);
                    break;
                case 'projects':
                    await printToConsole('Projeler sayfasına yönlendiriliyorsunuz...', 'info', 100);
                    setTimeout(() => window.location.href = '/pages/projects', 800);
                    break;
                case 'contact':
                    await printToConsole('İletişim sayfasına yönlendiriliyorsunuz...', 'info', 100);
                    setTimeout(() => window.location.href = '/pages/contact', 800);
                    break;
                case 'clear':
                    cliOutput.innerHTML = '';
                    cliOutput.classList.remove('active');
                    break;
                default:
                    await printToConsole(`bash: ${command}: command not found. Komutları görmek için 'help' yazın.`, 'error', 100);
            }
        }
    });
}
