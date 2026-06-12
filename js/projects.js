// --- PROJELER: FİLTRELEME VE SIRALAMA MOTORU ---
document.addEventListener('DOMContentLoaded', () => {
    const sortToggleBtn = document.getElementById('sort-toggle-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Sayfada sıralama sistemi yoksa kodu durdur
    if (!projectsGrid || !sortToggleBtn) return;

    // Tüm proje kartlarını bir diziye (array) çeviriyoruz
    let cards = Array.from(document.querySelectorAll('.project-card'));
    let currentSort = 'newest'; // Başlangıç durumu

    // TEK BUTON İLE SIRALAMA (En Yeni <-> En Eski)
    sortToggleBtn.addEventListener('click', () => {
        // Durumu tersine çevir
        currentSort = currentSort === 'newest' ? 'oldest' : 'newest';
        
        const textSpan = sortToggleBtn.querySelector('span');
        const icon = sortToggleBtn.querySelector('.sort-icon');

        // Butonun yazısını, i18n etiketini ve ikon yönünü güncelle
        if (currentSort === 'newest') {
            textSpan.setAttribute('data-i18n', 'sort_newest');
            textSpan.textContent = translations[currentLang]['sort_newest'];
            icon.style.transform = 'rotate(0deg)';
        } else {
            textSpan.setAttribute('data-i18n', 'sort_oldest');
            textSpan.textContent = translations[currentLang]['sort_oldest'];
            icon.style.transform = 'rotate(180deg)';
        }
        
        // Tarihe göre sıralama işlemi
        cards.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date') || '2000-01-01').getTime();
            const dateB = new Date(b.getAttribute('data-date') || '2000-01-01').getTime();
            return currentSort === 'newest' ? dateB - dateA : dateA - dateB;
        });

        // Kartları DOM'dan koparıp yeni sırayla tekrar grid'in içine yerleştirir
        cards.forEach((card, index) => {
            projectsGrid.appendChild(card);
            
            // Sıralama animasyonu (Her karta index numarasına göre gecikmeli uygulanır)
            card.style.animation = 'none'; // Önceki animasyonu sıfırla
            void card.offsetWidth; // Tarayıcıyı yenilenmeye zorla (Reflow)
            card.style.animation = `pop-in-card 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${index * 0.1}s`;
        });
    });
});
