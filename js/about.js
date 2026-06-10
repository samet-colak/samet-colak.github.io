// --- YETENEK BARLARI (SKILL BARS) KAYDIRMA ANİMASYONU ---
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('filled'); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// --- OTOMATİK YAŞ HESAPLAMA ---
function updateAge() {
    const ageElement = document.getElementById('my-age');
    if (ageElement) {
        // Kendi tam doğum tarihinizi YYYY-AA-GG (Yıl-Ay-Gün) formatında aşağıya girin.
        const birthDate = new Date('2009-05-25'); 
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        // Eğer bu yılki doğum gününüz henüz gelmediyse yaşı 1 düşürür
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageElement.textContent = age;
    }
}

// DOM zaten yüklendiyse anında çalıştır, değilse yüklenmesini bekle
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initSkillBars();
        updateAge();
    });
} else {
    initSkillBars();
    updateAge();
}