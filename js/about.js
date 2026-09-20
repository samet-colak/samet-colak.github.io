/**
 * js/about.js
 * Hakkımda & Yetkinlikler Bölümü İnteraktif Davranışları
 * - Bento Glass Mouse Spotlight (Kursor Işığı)
 * - IntersectionObserver İlerleme Çubukları (Skill Bars)
 * - Dinamik Yaş Hesaplama
 */

// --- 1. SPOTLIGHT ETKİLEŞİMİ (MOUSE IŞIĞI) ---
function initAboutSpotlight() {
    const interactiveCards = document.querySelectorAll('.about-card, .skill-card');
    if (!interactiveCards.length) return;

    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// --- 2. YETENEK BARLARI (SKILL BARS) KAYDIRMA ANİMASYONU ---
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    if (!skillBars.length) return;

    if ('IntersectionObserver' in window) {
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const targetWidth = bar.getAttribute('data-width') || '80%';
                    bar.style.setProperty('--target-width', targetWidth);
                    bar.classList.add('filled');
                    observer.unobserve(bar);
                }
            });
        }, { 
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    } else {
        // Eski tarayıcılar için doğrudan doldurma
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width') || '80%';
            bar.style.setProperty('--target-width', targetWidth);
            bar.classList.add('filled');
        });
    }
}

// --- 3. OTOMATİK YAŞ HESAPLAMA ---
function updateAge() {
    const ageElement = document.getElementById('my-age');
    if (ageElement) {
        const birthDate = new Date('2009-05-25');
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageElement.textContent = age;
    }
}

// DOM Hazır Olduğunda Başlat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAboutSpotlight();
        initSkillBars();
        updateAge();
    });
} else {
    initAboutSpotlight();
    initSkillBars();
    updateAge();
}