/**
 * js/about.js
 * Hakkımda & Bento Grid İnteraktif Davranışları
 * - Bento Glass Mouse Spotlight (Kursor Takip Eden Yumuşak Işık)
 * - Mikro Kart Derinlik Efektleri
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

// DOM Hazır Olduğunda Başlat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutSpotlight);
} else {
    initAboutSpotlight();
}
