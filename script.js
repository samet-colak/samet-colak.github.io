// --- NAVBAR SCROLL EFEKTİ ---
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// İngilizce - Türkçe Dil Değiştirme Sistemi (Çeviri Sözlüğü)
const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        projects: "Projeler",
        certificates: "Sertifikalar",
        contact: "İletişim",
        hero_greeting_small: "Merhaba, benim adım",
        hero_im: "Ben bir",
        hero_desc: "Yazılım dünyasına tutkuyla bağlı, modern web teknolojileri ve yapay zeka araçlarını harmanlayarak yenilikçi çözümler üreten bir geliştiriciyim. HTML, CSS, Python ve C# alanlarındaki yetkinliklerimi sürekli ileriye taşıyor; kullanıcı deneyimini merkeze alan, ölçeklenebilir ve estetik projeler inşa ediyorum.",
        hero_badge: "Yenilikçi Çözümler",
        hero_btn: "Projelerimi Gör",
        hero_btn_contact: "İletişime Geç",
        about_heading: "Tutkulu Bir Genç Geliştirici",
        about_p1: "Merhaba, ben Samet Çolak. Tuzla Mesleki ve Teknik Anadolu Lisesi Bilişim Teknolojileri bölümü 11. sınıf öğrencisiyim. Yazılım dünyasına olan merakım beni sürekli yeni şeyler öğrenmeye ve üretmeye itiyor.",
        about_p2: "Sadece teorik bilgilerle yetinmiyor, modern web teknolojileri ve yapay zeka (AI) araçlarını birleştirerek kullanıcı dostu arayüzler tasarlıyorum. Hedefim, staj sürecimde vizyoner bir ekibin parçası olarak gerçek projelere değer katmak.",
        info_age: "Yaş:",
        info_school: "Okul:",
        info_location: "Şehir:",
        skills_heading: "Teknik Yeteneklerim",
        skill_ai: "Yapay Zeka Araçları",
        projects_empty_title: "Projeler Hazırlanıyor",
        projects_empty_desc: "Staj ve kariyer hedeflerim doğrultusunda geliştirmekte olduğum modern web ve yapay zeka entegreli projelerim, son optimizasyonların ardından çok yakında bu alanda sergilenecektir.",
        project_barber_title: "Modern Berber & Kuaför Sitesi",
        project_barber_desc: "Müşteriler için tasarlanmış; hizmetlerin, fiyatların ve iletişim bilgilerinin yer aldığı tamamen duyarlı (responsive) kurumsal berber web sitesi.",
        btn_live_view: "Canlı İzle",
        btn_github: "GitHub Kodu",
        certs_empty_title: "Sertifikalar Yükleniyor",
        certs_empty_desc: "Eğitim süreçlerim ve katıldığım kurslar sonucunda almaya hak kazanacağım uluslararası geçerliliğe sahip sertifikalar yakında bu alanda listelenecektir.",
        project1_title: "Kişisel Blog",
        project1_desc: "HTML ve CSS kullanarak tasarladığım tamamen duyarlı (responsive) kişisel blog tasarımı.",
        project2_title: "Hesap Makinesi",
        project2_desc: "JavaScript ile geliştirdiğim, modern arayüzlü ve animasyonlu hesap makinesi uygulaması.",
        project3_title: "Görev Yöneticisi",
        project3_desc: "Kullanıcıların görev ekleyip silebildiği LocalStorage destekli To-Do App.",
        edu_school: "Tuzla Mesleki ve Teknik Anadolu Lisesi",
        edu_date: "2023 - Devam Ediyor",
        edu_desc: "Bilişim Teknolojileri Alanı - Yazılım Geliştirme Dalı",
        contact_text: "Bana aşağıdaki e-posta adresinden veya LinkedIn üzerinden ulaşabilirsiniz.",
        contact_title: "Fikirleri Gerçeğe Dönüştürelim.",
        contact_desc: "Dijital dünyada iz bırakacak yeni bir proje, kariyerime değer katacak bir staj fırsatı veya sadece teknoloji üzerine bir sohbet... Bir kahve eşliğinde harika şeyler konuşabiliriz. Doğrudan bana ulaşın!",
        phone_label: "Telefon",
        email_label: "E-Posta",
        social_label: "Sosyal Medya",
        contact_status: "Yeni Fırsatlara Açık",
        email_action: "Bana Yazın ➔",
        connect_action: "Bağlantı Kur ➔",
        follow_action: "Takip Et ➔",
        location_title: "Bulunduğum Konum",
        location_desc: "İstanbul, Türkiye",
        timezone_label: "GMT+3 (TSİ)",
        footer_desc: "Modern ve kullanıcı dostu web deneyimleri tasarlıyorum.",
        footer_quick_links: "Hızlı Bağlantılar",
        footer_social: "Sosyal Medya",
        scroll_top: "Yukarı Çık",
        error_page: "Sayfa Bulunamadı",
        error_404_title: "404 - Kayıp Uzay",
        error_404_desc: "Görünüşe göre aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış. Lütfen ana sayfaya dönerek portfolyomu keşfetmeye devam edin.",
        back_home: "Ana Sayfaya Dön",
        footer_text: "© 2026 Tüm Hakları Saklıdır.",
        mobile_warn_title: "Daha İyi Bir Deneyim İçin",
        mobile_warn_desc: "Bu portfolyoda yer alan özel animasyonları ve ince tasarım detaylarını tam anlamıyla deneyimleyebilmek için bilgisayar veya tablet üzerinden ziyaret etmenizi tavsiye ederim.",
        mobile_warn_btn: "Yine de Devam Et"
    },
    en: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
        hero_greeting_small: "Hello, my name is",
        hero_im: "I am a",
        hero_desc: "A passionate developer crafting innovative solutions by blending modern web technologies with AI tools. I continuously advance my proficiency in HTML, CSS, Python, and C#, building scalable, aesthetic, and user-centric projects.",
        hero_badge: "Innovative Solutions",
        hero_btn: "View My Projects",
        hero_btn_contact: "Contact Me",
        about_heading: "A Passionate Young Developer",
        about_p1: "Hello, I am Samet Çolak. I am an 11th-grade Information Technologies student at Tuzla Vocational and Technical Anatolian High School. My curiosity for the software world constantly drives me to learn and create.",
        about_p2: "I don't just settle for theoretical knowledge; I combine modern web technologies and AI tools to design user-friendly interfaces. My goal is to add value to real-world projects as part of a visionary team during my internship.",
        info_age: "Age:",
        info_school: "School:",
        info_location: "Location:",
        skills_heading: "Technical Skills",
        skill_ai: "AI Tools",
        projects_empty_title: "Projects in Progress",
        projects_empty_desc: "The modern web and AI-integrated projects I am developing in line with my internship and career goals will be showcased here very soon after final optimizations.",
        project_barber_title: "Modern Barber & Salon Website",
        project_barber_desc: "A fully responsive corporate barber website designed for customers, featuring services, pricing, and contact information.",
        btn_live_view: "Live View",
        btn_github: "GitHub Code",
        certs_empty_title: "Certificates Loading",
        certs_empty_desc: "The internationally recognized certificates I will earn as a result of my education and courses will be listed in this area very soon.",
        project1_title: "Personal Blog",
        project1_desc: "A fully responsive personal blog designed using HTML and CSS.",
        project2_title: "Calculator",
        project2_desc: "A calculator app with a modern interface and animations, built with JavaScript.",
        project3_title: "Task Manager",
        project3_desc: "A LocalStorage supported To-Do App where users can add and delete tasks.",
        edu_school: "Tuzla Vocational and Technical Anatolian High School",
        edu_date: "2023 - Present",
        edu_desc: "Information Technologies - Software Development Branch",
        contact_text: "You can reach me via the email below or through LinkedIn.",
        contact_title: "Let's Turn Ideas Into Reality.",
        contact_desc: "A new project to leave a mark in the digital world, an internship opportunity to add value to my career, or just a chat about technology... We can talk about great things over a coffee. Reach out to me directly!",
        phone_label: "Phone",
        email_label: "Email",
        social_label: "Social Media",
        contact_status: "Open to Opportunities",
        email_action: "Write to Me ➔",
        connect_action: "Connect ➔",
        follow_action: "Follow ➔",
        location_title: "Current Location",
        location_desc: "Istanbul, Turkey",
        timezone_label: "GMT+3 (TRT)",
        footer_desc: "I design modern and user-friendly web experiences.",
        footer_quick_links: "Quick Links",
        footer_social: "Social Media",
        scroll_top: "Back to Top",
        error_page: "Page Not Found",
        error_404_title: "404 - Lost in Space",
        error_404_desc: "It looks like the page you are looking for has been moved, deleted, or never existed. Please return to the home page to continue exploring my portfolio.",
        back_home: "Back to Home",
        footer_text: "© 2026 All Rights Reserved.",
        mobile_warn_title: "For a Better Experience",
        mobile_warn_desc: "To fully experience the custom animations and intricate design details in this portfolio, I highly recommend visiting from a computer or tablet.",
        mobile_warn_btn: "Continue Anyway"
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'tr';
const langBtn = document.getElementById('lang-btn');
let originalTitle = document.title;

function updateLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    const langText = document.getElementById('lang-text');
    if (langText) langText.textContent = lang === 'tr' ? 'EN' : 'TR';
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Sayfa başlığını (Title) dile göre güncelleme
    const pageSection = document.querySelector('section');
    if (pageSection && pageSection.id && translations[lang][pageSection.id]) {
        document.title = translations[lang][pageSection.id] + " | Samet Çolak";
        if (!document.hidden) {
            originalTitle = document.title;
        }
    }
}

updateLanguage(currentLang); // Sayfa açılır açılmaz dili uygula

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('portfolio_lang', currentLang); // Dili tarayıcıya kaydet
    updateLanguage(currentLang);
    
    // Dil değiştiğinde yazma animasyonunu temizle ve yeniden başlat
    charIndex = 0;
    isDeleting = false;
    clearTimeout(typeTimeout);
    typeEffect();
});

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

    const currentLangStrings = typeStrings[currentLang];
    
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
        typeSpeed = 2000; // Kelime tam yazılınca 2 saniye bekle
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % currentLangStrings.length;
        typeSpeed = 400; // Silme işlemi bitince yeni kelimeye geçmeden önce bekle
    }

    typeTimeout = setTimeout(typeEffect, typeSpeed);
}

// Sayfa yüklendiğinde efekti başlat
typeEffect();

// --- BAŞKA SEKMEYE GİDİNCE ÇIKAN YAZI (TITLE EFEKTİ) ---
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        originalTitle = document.title; // Kullanıcı sekmeyi terk ettiğinde güncel başlığı sakla
        document.title = currentLang === 'tr' ? "Seni özledik... ✨" : "We missed you... ✨";
    } else {
        document.title = originalTitle; // Geri döndüğünde orijinal başlığı geri yükle
    }
});

// --- PROJE ÖNİZLEME PENCERESİ (MODAL) YÖNETİMİ ---
function openProjectModal(url) {
    const modal = document.getElementById('project-modal');
    const iframe = document.getElementById('project-iframe');
    if (modal && iframe) {
        iframe.src = url;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Arka plan sitenin kaymasını engelle
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    const iframe = document.getElementById('project-iframe');
    if (modal && iframe) {
        modal.classList.remove('show');
        setTimeout(() => { iframe.src = ''; }, 400); // Kapanma animasyonu bitince içini temizle
        document.body.style.overflow = 'auto'; // Arka plan kaymasını geri aç
    }
}

// --- MODAL DIŞINA (KARANLIK ALANA) TIKLAYINCA KAPATMA ---
window.addEventListener('click', (e) => {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// --- MOBİL HAMBURGER MENÜ YÖNETİMİ ---
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
        // Menü açıkken arkaplan kaymasını engelle
        document.body.style.overflow = navLinksContainer.classList.contains('nav-active') ? 'hidden' : 'auto';
    });

    // Bir linke tıklandığında menüyü otomatik kapat
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
            document.body.style.overflow = 'auto';
        });
    });
}

// --- MOBİL CİHAZ UYARI EKRANI ---
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768 && !sessionStorage.getItem('mobileWarningSeen')) {
        const warningDiv = document.createElement('div');
        warningDiv.id = "mobile-warning";
        warningDiv.innerHTML = `
            <div class="mobile-warning-content">
                <span class="warning-icon">📱 🚫 💻</span>
                <h3 data-i18n="mobile_warn_title">Daha İyi Bir Deneyim İçin</h3>
                <p data-i18n="mobile_warn_desc">Bu portfolyoda yer alan özel animasyonları ve ince tasarım detaylarını tam anlamıyla deneyimleyebilmek için bilgisayar veya tablet üzerinden ziyaret etmenizi tavsiye ederim.</p>
                <button id="close-warning" class="btn" data-i18n="mobile_warn_btn">Yine de Devam Et</button>
            </div>
        `;
        document.body.appendChild(warningDiv);
        updateLanguage(currentLang);

        document.getElementById('close-warning').addEventListener('click', () => {
            warningDiv.style.opacity = '0';
            sessionStorage.setItem('mobileWarningSeen', 'true');
            setTimeout(() => warningDiv.remove(), 500);
        });
    }
});

// --- ÖZEL İMLEÇ (CUSTOM CURSOR) ---
if (window.matchMedia("(pointer: fine)").matches) {
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Halkanın biraz gecikmeli, pürüzsüz (smooth) gelmesini sağla
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 400, fill: "forwards" });
    });

    // Tıklanabilir elementlerin (A-Kalite) üzerine gelme efekti
    const interactiveElements = document.querySelectorAll('a, button, .bento-card, .social-icon, .social-link, .hamburger');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });
}

// --- 3D KART PARALLAX EFEKTİ ---
const card3d = document.querySelector('.hero-3d-card');
if (card3d) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 900) { // Sadece masaüstünde efekti çalıştır
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card3d.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
    
    card3d.addEventListener('mouseenter', () => {
        card3d.style.transition = 'none'; // Üzerine gelince gecikmeyi kapat
    });
    
    card3d.addEventListener('mouseleave', () => {
        // Fare dışarı çıktığında orijinal eğik duruşuna yumuşakça geri dönsün
        card3d.style.transition = 'transform 0.5s ease-out, box-shadow 0.5s ease';
        card3d.style.transform = `rotateY(-15deg) rotateX(10deg)`;
    });
}


// --- GERÇEK YÜKLEME EKRANI (LOADING SCREEN) ---
const preloader = document.getElementById('preloader');
if (preloader) {
    let isReload = false;
    if (window.performance) {
        if (performance.navigation && performance.navigation.type === 1) {
            isReload = true;
        } else if (performance.getEntriesByType && performance.getEntriesByType("navigation").length > 0) {
            isReload = performance.getEntriesByType("navigation")[0].type === "reload";
        }
    }

    if (!sessionStorage.getItem('siteLoaded') || isReload) {
        const hidePreloader = () => {
            setTimeout(() => {
                preloader.classList.add('loaded');
                sessionStorage.setItem('siteLoaded', 'true');
            }, 1200); // Animasyonun daha net görülmesi için süre 1.2 saniyeye çıkarıldı
        };

        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader);
        }
    } else {
        preloader.style.display = 'none';
    }
}

// --- TEPE KAYDIRMA ÇUBUĞU (SCROLL PROGRESS BAR) ---
const scrollProgress = document.createElement('div');
scrollProgress.id = 'scroll-progress';
document.body.prepend(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// --- AŞAĞI KAYDIRDIKÇA BELİRME (SCROLL FADE-IN) EFEKTİ ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elementsToFade = document.querySelectorAll('.fade-in');
    elementsToFade.forEach(el => fadeObserver.observe(el));
});

// --- YETENEK BARLARI (SKILL BARS) KAYDIRMA ANİMASYONU ---
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s cubic-bezier(0.1, 0.5, 0.1, 1) forwards';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Ekranda %50 göründüğünde başlar

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// --- TERMİNAL KODU KOPYALAMA BUTONU ---
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1) Görsel animasyonu ve yeşil rengi ANINDA tetikle (Garantili)
        this.classList.add('copied');
        setTimeout(() => { this.classList.remove('copied'); }, 2000);

        // 2) Kopyalanacak metni bul (ID yoksa bile class üzerinden otomatik bulur)
        const codeBlock = document.getElementById('code-to-copy') || document.querySelector('.terminal-body code');
        if (codeBlock) {
            const textToCopy = codeBlock.innerText || codeBlock.textContent;

            const fallbackCopy = (text) => {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed"; // Sayfayı kaydırmaması için
                textArea.style.top = "-9999px";
                textArea.style.left = "-9999px";
                textArea.style.opacity = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try { document.execCommand('copy'); } catch (err) { console.error('Kopyalama hatası:', err); }
                document.body.removeChild(textArea);
            };

            // 3) Kopyalama işlemini arka planda yap
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(textToCopy).catch(() => fallbackCopy(textToCopy));
            } else {
                fallbackCopy(textToCopy);
            }
        }
    });
}

// --- YUKARI ÇIK (SCROLL TO TOP) BUTONU ---
document.querySelectorAll('.scroll-top').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Her tarayıcıda çalışan, bug'sız ve animasyonlu Yukarı Çık motoru
        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                // Hızı yavaşlatmak için adımları küçülttük (Çok daha yavaş ve pürüzsüz süzülür)
                window.scrollTo(0, c - Math.max(c / 25, 5)); 
            }
        };
        scrollToTop();
    });
});

// --- CANLI SAAT (LIVE TIME) YÖNETİMİ ---
function updateClock() {
    const timeElement = document.getElementById('live-time');
    if (timeElement) {
        const now = new Date();
        const options = { 
            timeZone: 'Europe/Istanbul', 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        timeElement.textContent = now.toLocaleTimeString('tr-TR', options);
    }
}
setInterval(updateClock, 1000);
updateClock(); // İlk yüklemede beklememek için hemen çalıştır
