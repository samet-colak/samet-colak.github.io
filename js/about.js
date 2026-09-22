/**
 * js/about.js
 * Hakkımda & Yetkinlikler Bölümü İnteraktif Davranışları
 * - Bento Glass Mouse Spotlight (Kursor Işığı)
 * - IntersectionObserver İlerleme Çubukları & Akıcı Sayaç Animasyonu (Skill Bars & Counters)
 * - Dinamik Yaş Hesaplama
 */

// --- 1. SPOTLIGHT ETKİLEŞİMİ (MOUSE IŞIĞI) ---
function initAboutSpotlight() {
    const interactiveCards = document.querySelectorAll('.about-card');
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

// --- 2. AKICI SAYAÇ ANİMASYONU ---
function animatePercentCounter(el, target, duration = 1200) {
    const startTime = performance.now();
    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * ease);
        el.textContent = `${current}%`;
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// --- 3. YETENEK BARLARI (SKILL BARS) KAYDIRMA ANİMASYONU ---
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

                    // İlgili yüzdelik sayacı bulup 0'dan hedefe pürüzsüz saydır
                    const row = bar.closest('.skill-row, .skill-card');
                    if (row) {
                        const percentEl = row.querySelector('.skill-percent');
                        if (percentEl) {
                            const targetVal = parseInt(percentEl.getAttribute('data-target') || '80', 10);
                            animatePercentCounter(percentEl, targetVal);
                        }
                    }

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
            const row = bar.closest('.skill-row, .skill-card');
            if (row) {
                const percentEl = row.querySelector('.skill-percent');
                if (percentEl) {
                    percentEl.textContent = `${percentEl.getAttribute('data-target') || '80'}%`;
                }
            }
        });
    }
}

// --- 4. OTOMATİK YAŞ HESAPLAMA ---
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