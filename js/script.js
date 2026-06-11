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
        hero_desc: "Yazılım dünyasına tutkuyla bağlı, modern web teknolojileri ve yapay zeka araçlarını harmanlayarak yenilikçi çözümler üreten bir geliştiriciyim. <span class='color-html'>HTML</span>, <span class='color-css'>CSS</span>, <span class='color-python'>Python</span> ve <span class='color-cs'>C#</span> alanlarındaki yetkinliklerimi sürekli ileriye taşıyor; kullanıcı deneyimini merkeze alan, ölçeklenebilir ve estetik projeler inşa ediyorum.",
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
        project_barber_desc: "Müşteri deneyimini merkeze alan, premium hissi veren modern arayüzü ve akıcı animasyonlarıyla öne çıkan tam duyarlı (responsive) berber salonu web platformu.",
        project_barber_extra: "Bir berber veya kuaför salonunun sunduğu kaliteli hizmeti dijital dünyaya taşıyan bu proje, müşterilerinizin sitenizde keyifle vakit geçirmesi için tasarlandı. Göz yormayan şık tasarımı, kolay kullanımı ve hızlı yapısıyla ziyaretçilerinize güven veren, birinci sınıf bir deneyim sunuyor.",
        modal_extra_empty: "Bu proje hakkında ekstra bir bilgi bulunmuyor.",
        btn_live_view: "Canlı İzle",
        btn_github: "GitHub Kodu",
        certs_empty_title: "Sertifikalar Yükleniyor",
        certs_empty_desc: "Eğitim süreçlerim ve katıldığım kurslar sonucunda almaya hak kazanacağım uluslararası geçerliliğe sahip sertifikalar yakında bu alanda listelenecektir.",
        sort_newest: "En Yeni",
        sort_oldest: "En Eski",
        contact_text: "Bana aşağıdaki e-posta adresinden veya LinkedIn üzerinden ulaşabilirsiniz.",
        contact_title: "Fikirleri Gerçeğe Dönüştürelim.",
        contact_desc: "Kariyer hedeflerim doğrultusundaki staj fırsatları, profesyonel iş birlikleri veya yenilikçi projeler için benimle iletişime geçebilirsiniz. Fikirleri, ölçeklenebilir ve nitelikli dijital çözümlere dönüştürmek için doğrudan bana ulaşın.",
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
        reveal_statement: "İyi tasarım sadece nasıl göründüğü ile ilgili değildir. Nasıl hissettirdiği ve nasıl çalıştığıyla ilgilidir. Kod satırları arasında bir hikaye yatar.",
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
        hero_desc: "A passionate developer crafting innovative solutions by blending modern web technologies with AI tools. I continuously advance my proficiency in <span class='color-html'>HTML</span>, <span class='color-css'>CSS</span>, <span class='color-python'>Python</span>, and <span class='color-cs'>C#</span>, building scalable, aesthetic, and user-centric projects.",
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
        project_barber_desc: "A fully responsive premium barber salon web platform, standing out with its customer-centric approach, modern interface, and fluid animations.",
        project_barber_extra: "Bringing the high-quality service of a barber or hair salon into the digital world, this project is designed for your customers to easily navigate and enjoy your site. With its elegant and modern design, user-friendly structure, and fast performance, it offers visitors a premium and trustworthy experience.",
        modal_extra_empty: "There is no extra information about this project.",
        btn_live_view: "Live View",
        btn_github: "GitHub Code",
        certs_empty_title: "Certificates Loading",
        certs_empty_desc: "The internationally recognized certificates I will earn as a result of my education and courses will be listed in this area very soon.",
        sort_newest: "Newest",
        sort_oldest: "Oldest",
        contact_text: "You can reach me via the email below or through LinkedIn.",
        contact_title: "Let's Turn Ideas Into Reality.",
        contact_desc: "You can contact me for internship opportunities aligned with my career goals, professional collaborations, or innovative projects. Reach out to me directly to transform ideas into scalable and qualified digital solutions.",
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
        reveal_statement: "Good design is not just about what it looks like. It's about how it feels and how it works. A story lies between the lines of code.",
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
    
    // Yeni Dil ayarını diğer sayfa modüllerine duyur (Custom Event)
    window.dispatchEvent(new CustomEvent('langChanged', { detail: currentLang }));
});

// --- BAŞKA SEKMEYE GİDİNCE ÇIKAN YAZI (TITLE EFEKTİ) ---
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        originalTitle = document.title; // Kullanıcı sekmeyi terk ettiğinde güncel başlığı sakla
        document.title = currentLang === 'tr' ? "Seni özledik... ✨" : "We missed you... ✨";
    } else {
        document.title = originalTitle; // Geri döndüğünde orijinal başlığı geri yükle
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

        // --- ARKA PLAN KÜRELERİ (PARALLAX) EFEKTİ ---
        const bgShapes = document.querySelectorAll('.shape');
        if (bgShapes.length > 0) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            bgShapes.forEach((shape, index) => {
                // Her bir küreye farklı derinlik hissi (hız) veriyoruz
                const speed = (index + 1.5) * 0.015; 
                const moveX = (centerX - posX) * speed;
                const moveY = (centerY - posY) * speed;
                shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
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

// --- URL'DEN .HTML UZANTISINI GİZLEME (CLEAN URL) ---
if (window.location.pathname.endsWith('.html')) {
    // Eğer sayfa index.html ise ana dizine (/) çevir, değilse sadece .html kısmını sil
    let cleanPath = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    if (cleanPath === '') cleanPath = '/';
    const cleanUrl = cleanPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', cleanUrl);
}
}

// --- PROJE MODAL (POP-UP) SİSTEMİ ---
const projectModal = document.getElementById('project-modal');
const projectCards = document.querySelectorAll('.project-card');

if (projectModal && projectCards.length > 0) {
    const modalClose = projectModal.querySelector('.modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalExtra = document.getElementById('modal-extra');
    const modalTech = document.getElementById('modal-tech');
    const modalLinks = document.getElementById('modal-links');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Eğer GitHub veya Canlı İzle butonuna tıklandıysa pop-up'ı AÇMA (orijinal linke gitsin)
            if (e.target.closest('.project-links')) return;

            // Karttan mevcut verileri çek
            modalTitle.innerHTML = card.querySelector('.project-title').innerHTML;
            
            const descElement = card.querySelector('p[data-i18n]');
            modalDesc.setAttribute('data-i18n', descElement.getAttribute('data-i18n'));
            modalDesc.innerHTML = descElement.innerHTML;
            
            modalTech.innerHTML = card.querySelector('.project-tech').innerHTML;
            modalLinks.innerHTML = card.querySelector('.project-links').innerHTML;
            
            // Arka plan resmini al
            const bgImage = window.getComputedStyle(card.querySelector('.project-img')).backgroundImage;
            modalImg.src = bgImage.replace(/(url\(|\)|"|')/g, '') !== 'none' ? bgImage.replace(/(url\(|\)|"|')/g, '') : '';
            
            // Ekstra metni dil sistemine entegre ederek al
            const extraKey = card.getAttribute('data-i18n-extra');
            if (extraKey && translations[currentLang][extraKey]) {
                modalExtra.setAttribute('data-i18n', extraKey);
                modalExtra.innerHTML = translations[currentLang][extraKey];
            } else {
                modalExtra.setAttribute('data-i18n', 'modal_extra_empty');
                modalExtra.innerHTML = translations[currentLang]['modal_extra_empty'];
            }

            // Modalı göster ve arka plan kaymasını engelle
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    });

    // Modalı Kapatma
    const closeModal = () => { projectModal.classList.remove('active'); document.body.style.overflow = 'auto'; };
    modalClose.addEventListener('click', closeModal);
    projectModal.addEventListener('click', (e) => { if (e.target === projectModal) closeModal(); });

    // Esc tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) closeModal();
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
            }, 1200);
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

// --- TERMINAL KOD DEĞİŞTİRME MOTORU ---
document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById('prev-code');
    const nextBtn = document.getElementById('next-code');
    const fileNameDisplay = document.getElementById('current-file-name');
    const codeDisplay = document.getElementById('code-to-copy');

    if (prevBtn && nextBtn && fileNameDisplay && codeDisplay) {
        const codeSnippets = [
            {
                file: "developer.py",
                code: `<span class="term-comment"># Samet Çolak - Profil</span>\n<span class="term-keyword">class</span> <span class="term-variable">Developer</span>:\n    <span class="term-keyword">def</span> <span class="term-property">__init__</span>(<span class="term-variable">self</span>):\n        <span class="term-variable">self</span>.<span class="term-property">name</span> <span class="term-operator">=</span> <span class="term-string">"Samet Çolak"</span>\n        <span class="term-variable">self</span>.<span class="term-property">role</span> <span class="term-operator">=</span> <span class="term-string">"Software Developer"</span>\n        <span class="term-variable">self</span>.<span class="term-property">skills</span> <span class="term-operator">=</span> [<span class="term-string">"HTML"</span>, <span class="term-string">"CSS"</span>, <span class="term-string">"Python"</span>, <span class="term-string">"C#"</span>]\n        <span class="term-variable">self</span>.<span class="term-property">ai</span> <span class="term-operator">=</span> <span class="term-keyword">True</span><span class="term-cursor">_</span>`
            },
            {
                file: "developer.js",
                code: `<span class="term-comment">// Samet Çolak - Profil</span>\n<span class="term-keyword">const</span> <span class="term-variable">developer</span> <span class="term-operator">=</span> {\n    <span class="term-property">name</span>: <span class="term-string">"Samet Çolak"</span>,\n    <span class="term-property">role</span>: <span class="term-string">"Software Developer"</span>,\n    <span class="term-property">skills</span>: [<span class="term-string">"HTML"</span>, <span class="term-string">"CSS"</span>, <span class="term-string">"Python"</span>, <span class="term-string">"C#"</span>],\n    <span class="term-property">learningAI</span>: <span class="term-keyword">true</span>\n};<span class="term-cursor">_</span>`
            },
            {
                file: "developer.cs",
                code: `<span class="term-comment">// Samet Çolak - Profil</span>\n<span class="term-keyword">public class</span> <span class="term-variable">Developer</span> {\n    <span class="term-keyword">public string</span> <span class="term-property">Name</span> <span class="term-operator">=</span> <span class="term-string">"Samet Çolak"</span>;\n    <span class="term-keyword">public string</span> <span class="term-property">Role</span> <span class="term-operator">=</span> <span class="term-string">"Software Developer"</span>;\n    <span class="term-keyword">public string[]</span> <span class="term-property">Skills</span> <span class="term-operator">=</span> {<span class="term-string">"HTML"</span>, <span class="term-string">"CSS"</span>, <span class="term-string">"Python"</span>, <span class="term-string">"C#"</span>};\n    <span class="term-keyword">public bool</span> <span class="term-property">LearningAI</span> <span class="term-operator">=</span> <span class="term-keyword">true</span>;\n}<span class="term-cursor">_</span>`
            },
            {
                file: "developer.html",
                code: `<span class="term-comment">&lt;!-- Samet Çolak - Profil --&gt;</span>\n<span class="term-keyword">&lt;div</span> <span class="term-property">class=</span><span class="term-string">"developer"</span><span class="term-keyword">&gt;</span>\n    <span class="term-keyword">&lt;h1&gt;</span>Samet Çolak<span class="term-keyword">&lt;/h1&gt;</span>\n    <span class="term-keyword">&lt;p&gt;</span>Software Developer<span class="term-keyword">&lt;/p&gt;</span>\n    <span class="term-keyword">&lt;ul</span> <span class="term-property">class=</span><span class="term-string">"skills"</span><span class="term-keyword">&gt;</span>\n        <span class="term-keyword">&lt;li&gt;</span>HTML &amp; CSS<span class="term-keyword">&lt;/li&gt;</span>\n        <span class="term-keyword">&lt;li&gt;</span>Python &amp; C#<span class="term-keyword">&lt;/li&gt;</span>\n    <span class="term-keyword">&lt;/ul&gt;</span>\n<span class="term-keyword">&lt;/div&gt;</span><span class="term-cursor">_</span>`
            },
            {
                file: "developer.css",
                code: `<span class="term-comment">/* Samet Çolak - Profil */</span>\n<span class="term-keyword">.developer</span> {\n    <span class="term-property">--name</span>: <span class="term-string">"Samet Çolak"</span>;\n    <span class="term-property">--role</span>: <span class="term-string">"Software Developer"</span>;\n    <span class="term-property">--skills</span>: <span class="term-string">"HTML, CSS, Python, C#"</span>;\n    <span class="term-property">display</span>: <span class="term-variable">flex</span>;\n    <span class="term-property">learning-ai</span>: <span class="term-variable">true</span>;\n}<span class="term-cursor">_</span>`
            }
        ];

        let currentIndex = 0;

        function updateTerminal(index) {
            codeDisplay.style.opacity = 0;
            fileNameDisplay.style.opacity = 0;
            
            setTimeout(() => {
                fileNameDisplay.textContent = codeSnippets[index].file;
                codeDisplay.innerHTML = codeSnippets[index].code;
                codeDisplay.style.opacity = 1;
                fileNameDisplay.style.opacity = 1;
            }, 200);
        }

        prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + codeSnippets.length) % codeSnippets.length; updateTerminal(currentIndex); });
        nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % codeSnippets.length; updateTerminal(currentIndex); });
        
        codeDisplay.style.transition = "opacity 0.2s ease";
        fileNameDisplay.style.transition = "opacity 0.2s ease";
    }
});

// --- TERMINAL BUTONLARI ETKİLEŞİMİ (MINIMIZE, MAXIMIZE, CLOSE) ---
document.addEventListener("DOMContentLoaded", () => {
    const termWindow = document.querySelector('.terminal-window');
    const closeBtn = document.querySelector('.close-btn');
    const minBtn = document.querySelector('.minimize-btn');
    const maxBtn = document.querySelector('.maximize-btn');
    const termBody = document.querySelector('.terminal-body');

    if (termWindow && closeBtn && minBtn && maxBtn && termBody) {
        // Kırmızı (Kapatma) - Sistemi yeniden başlatır gibi retro animasyon
        closeBtn.addEventListener('click', () => {
            if (termWindow.classList.contains('terminal-shutting-down') || termWindow.classList.contains('terminal-rebooting')) return;
            
            termWindow.classList.add('terminal-shutting-down');
            termWindow.classList.remove('terminal-maximized', 'terminal-minimized');
            
            setTimeout(() => {
                termWindow.classList.remove('terminal-shutting-down');
                termWindow.classList.add('terminal-rebooting');
                termBody.style.opacity = '0'; // Açılırken kodu kısa süre gizler
                
                setTimeout(() => {
                    termWindow.classList.remove('terminal-rebooting');
                    termBody.style.opacity = '1'; // Kodları tekrar gösterir
                }, 600); // Açılma süresi
            }, 600); // Kapanma süresi
        });

        // Sarı (Simge Durumuna Küçült)
        minBtn.addEventListener('click', () => {
            if (!termWindow.classList.contains('terminal-shutting-down')) {
                termWindow.classList.toggle('terminal-minimized');
            }
        });

        // Yeşil (Büyüt)
        maxBtn.addEventListener('click', () => {
            if (!termWindow.classList.contains('terminal-shutting-down')) {
                termWindow.classList.toggle('terminal-maximized');
            }
        });
    }
});

// --- GELİŞTİRİCİ KOMUT MENÜSÜ (CMD+K / CTRL+K) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Menü HTML'ini sayfaya gizlice enjekte et
    if (!document.getElementById('cmd-palette')) {
        const cmdMenuHTML = `
            <div id="cmd-palette" class="cmd-palette-overlay">
                <div class="cmd-palette-container">
                    <div class="cmd-header">
                        <svg class="cmd-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="text" id="cmd-input" placeholder="Ne arıyorsunuz? (Örn: Projeler, İletişim...)">
                        <span class="cmd-esc">ESC</span>
                    </div>
                    <div class="cmd-body">
                        <div class="cmd-group" data-group="Navigasyon">
                            <div class="cmd-group-title">Navigasyon</div>
                            <a href="/" class="cmd-item active" data-keywords="ana sayfa home index">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span>Ana Sayfa</span>
                            </a>
                            <a href="/pages/about" class="cmd-item" data-keywords="hakkımda about me kimdir yetenekler">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <span>Hakkımda</span>
                            </a>
                            <a href="/pages/projects" class="cmd-item" data-keywords="projeler projects işler portfolyo">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                <span>Projeler</span>
                            </a>
                            <a href="/pages/certificates" class="cmd-item" data-keywords="sertifikalar certificates belgeler">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <span>Sertifikalar</span>
                            </a>
                        </div>
                        <div class="cmd-group" data-group="İletişim & Sosyal">
                            <div class="cmd-group-title">İletişim & Sosyal</div>
                            <a href="/pages/contact" class="cmd-item" data-keywords="iletişim contact ulaş mesaj mail e-posta">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>İletişime Geç</span>
                            </a>
                            <a href="https://github.com/samet-colak" target="_blank" class="cmd-item" data-keywords="github kod kaynak repo">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                <span>GitHub Profilim</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', cmdMenuHTML);
    }

    // 2. Etkileşimler ve Mantık
    const overlay = document.getElementById('cmd-palette');
    const input = document.getElementById('cmd-input');
    const items = Array.from(document.querySelectorAll('.cmd-item'));

    const toggleMenu = (show) => {
        if (show) {
            overlay.classList.add('active');
            input.value = '';
            filterItems('');
            setTimeout(() => input.focus(), 100);
        } else {
            overlay.classList.remove('active');
            input.blur();
        }
    };

    // Klavye Kısayolları (Ctrl+K / Mac için Cmd+K, Yön tuşları ve Enter)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            toggleMenu(!overlay.classList.contains('active'));
        }
        
        if (!overlay.classList.contains('active')) return;

        if (e.key === 'Escape') { toggleMenu(false); } 
        else if (e.key === 'ArrowDown') { e.preventDefault(); navigateItems(1); } 
        else if (e.key === 'ArrowUp') { e.preventDefault(); navigateItems(-1); } 
        else if (e.key === 'Enter') {
            e.preventDefault();
            const activeItem = items.find(item => item.classList.contains('active') && item.style.display !== 'none');
            if (activeItem) activeItem.click();
        }
    });

    // Dışarı tıklanınca kapanma
    if (overlay) {
        overlay.addEventListener('click', (e) => { if (e.target === overlay) toggleMenu(false); });
    }

    // Canlı Arama/Filtreleme Fonksiyonu
    if (input) {
        input.addEventListener('input', (e) => filterItems(e.target.value.toLowerCase()));
    }

    function filterItems(query) {
        let firstVisible = null;
        items.forEach(item => {
            item.classList.remove('active');
            const text = item.querySelector('span').textContent.toLowerCase();
            const keywords = item.getAttribute('data-keywords');
            if (text.includes(query) || keywords.includes(query)) {
                item.style.display = 'flex';
                if (!firstVisible) firstVisible = item;
            } else {
                item.style.display = 'none';
            }
        });
        
        document.querySelectorAll('.cmd-group').forEach(group => {
            const visibleItems = Array.from(group.querySelectorAll('.cmd-item')).filter(i => i.style.display !== 'none');
            group.style.display = visibleItems.length > 0 ? 'block' : 'none';
        });

        if (firstVisible) firstVisible.classList.add('active');
    }

    function navigateItems(direction) {
        const visibleItems = items.filter(item => item.style.display !== 'none');
        if (visibleItems.length === 0) return;
        const currentIndex = visibleItems.findIndex(item => item.classList.contains('active'));
        let nextIndex = currentIndex + direction;
        if (nextIndex < 0) nextIndex = visibleItems.length - 1;
        if (nextIndex >= visibleItems.length) nextIndex = 0;
        visibleItems.forEach(item => item.classList.remove('active'));
        visibleItems[nextIndex].classList.add('active');
        visibleItems[nextIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
});

// --- FARE FENERİ (SPOTLIGHT) MOTORU ---
document.addEventListener('mousemove', (e) => {
    // Hem projelerdeki hem de iletişim sayfasındaki kartları (bento) bul
    const spotlightCards = document.querySelectorAll('.project-card, .bento-card');
    
    spotlightCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// --- DİJİTAL TIKLAMA PARÇACIKLARI (CLICK PARTICLE BURST) ---
document.addEventListener('click', (e) => {
    // Eğer komut menüsü overlay'ine tıklandıysa iptal et
    if (e.target.closest('.cmd-palette-overlay')) return;

    const colors = ['#00d2ff', '#3a7bd5', '#f8fafc'];
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'click-particle';
        document.body.appendChild(particle);
        
        const size = Math.random() * 6 + 3; // 3px - 9px arası
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const destinationX = (Math.random() - 0.5) * 80;
        const destinationY = (Math.random() - 0.5) * 80;
        
        particle.style.cssText = `
            width: ${size}px; height: ${size}px;
            background: ${color}; box-shadow: 0 0 ${size + 2}px ${color};
            left: ${e.clientX}px; top: ${e.clientY}px;
        `;
        
        setTimeout(() => { particle.style.transform = `translate(${destinationX}px, ${destinationY}px) scale(0)`; particle.style.opacity = '0'; }, 10);
        setTimeout(() => particle.remove(), 800);
    }
});
