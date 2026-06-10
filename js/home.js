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

// --- 3D KART PARALLAX EFEKTİ ---
const card3d = document.querySelector('.hero-3d-card');
if (card3d) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 900) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card3d.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
    
    card3d.addEventListener('mouseenter', () => {
        card3d.style.transition = 'none';
    });
    
    card3d.addEventListener('mouseleave', () => {
        card3d.style.transition = 'transform 0.5s ease-out, box-shadow 0.5s ease';
        card3d.style.transform = `rotateY(-15deg) rotateX(10deg)`;
    });
}

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