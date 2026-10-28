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
        nav_status: "Yeni Projelere & İş Birliklerine Açık",
        nav_search_text: "Hızlı Arama...",
        nav_cta: "Bana Ulaşın",
        hero_greeting_small: "Merhaba, benim adım",
        hero_im: "Ben bir",
        hero_desc: "Modern web mimarileri, React, Next.js, TypeScript ve Supabase gibi yenilikçi teknolojilerle yüksek performanslı, estetik ve ölçeklenebilir dijital ürünler geliştiren bir Full Stack Web Geliştiriciyim.",
        hero_badge: "Yenilikçi Çözümler",
        hero_btn: "Projelerimi Gör",
        hero_btn_contact: "İletişime Geç",
        about_badge_role: "Full Stack Web Mühendisi",
        about_telemetry_title: "// TELEMETRİ & KÜNYE",
        about_signal_label: "Canlı",
        about_availability_title: "Mevcut Durum",
        about_availability_val: "Yeni Projelere Açık",
        info_work_mode: "Çalışma:",
        info_work_mode_val: "Remote / Freelance",
        about_heading: "Full Stack & Web Geliştirici",
        about_p1: "Merhaba, ben Samet Çolak. Modern web ekosistemleri, kullanıcı deneyimi ve ölçeklenebilir yazılım mimarileri üzerine çalışan bir Full Stack Geliştiriciyim. Yazılım dünyasındaki yenilikleri yakından takip ediyor, temiz kod ve yüksek performans standartlarıyla dijital ürünler inşa ediyorum.",
        about_p2: "React, Next.js, TypeScript ve Supabase gibi modern araçları Three.js ile zenginleştirerek hem görsel hem de işlevsel olarak kusursuz kullanıcı deneyimleri geliştiriyorum. Hedefim, yenilikçi fikirleri katma değer sağlayan, sürdürülebilir projelere dönüştürmek.",
        about_pillar1_title: "Modern Web & SaaS Mimarisi",
        about_pillar1_desc: "Next.js 16, React ve TypeScript ile yüksek performanslı, duyarlı ve SEO odaklı modern web uygulamaları.",
        about_pillar2_title: "Backend & Veri Mimarisi",
        about_pillar2_desc: "Supabase, PostgreSQL ve RESTful API altyapıları ile güvenli, ölçeklenebilir ve sağlam veri modelleri.",
        about_pillar3_title: "3D Web & İnteraktif Deneyim",
        about_pillar3_desc: "Three.js, WebGL parçacıkları ve modern CSS animasyonları ile akıcı, estetik kullanıcı deneyimi.",
        info_age: "Yaş:",
        info_school: "Rol:",
        info_role: "Rol:",
        info_focus: "Odak:",
        info_location: "Şehir:",
        info_status: "Durum:",
        info_status_val: "Aktif & Projelere Açık",
        skills_heading: "Teknik Yetkinlikler",
        skills_subdesc: "Modern web uygulamaları ve dijital ürünler geliştirirken kullandığım temel teknolojiler.",
        skills_badge: "Core Tech Stack",
        skills_ecosystem_heading: "Geliştirme Araçları & Ekosistem",
        skills_meta_focus: "Çalışma Alanı:",
        skills_meta_focus_val: "Full Stack & SaaS",
        skills_meta_code: "Kod Standartı:",
        skills_meta_code_val: "Clean & Modern",
        skills_meta_status: "İş Durumu:",
        skills_meta_status_val: "Projelere Açık",
        cat_frontend_title: "Frontend Mimarisi",
        cat_backend_title: "Backend & Veritabanı",
        cat_interactive_title: "Grafik & 3D Web",
        cat_tools_title: "DevOps & Ekosistem",
        filter_all: "Tümü",
        filter_web: "Frontend & Web",
        filter_core: "Yazılım & Çekirdek",
        filter_emerging: "3D & AI",
        skill_level_advanced: "İleri Düzey",
        skill_level_proficient: "Yetkin",
        skill_level_intermediate: "Aktif",
        skill_ai: "Yapay Zeka Araçları",
        skill_html_tag: "Modern Web & Responsive Mimari",
        skill_js_tag: "DOM, Async & Web API",
        skill_python_tag: "Algoritma, Otomasyon & Veri İşleme",
        skill_cs_tag: "OOP & Masaüstü Mimarisi",
        skill_three_tag: "3D İnteraktif Sahneler & Parçacık Fiziği",
        skill_ai_tag: "İş Akışı & Prompt Mühendisliği",
        projects_empty_title: "Projeler Hazırlanıyor",
        projects_empty_desc: "Geliştirmekte olduğum modern web ve SaaS projelerim, son optimizasyonların ardından çok yakında bu alanda sergilenecektir.",
        project_novadent_title: "NovaDent — Sağlık Turizmi & Diş Kliniği Platformu",
        project_novadent_desc: "React 18 ve Tailwind CSS ile geliştirilmiş; interaktif Before/After simülatörü, 4 adımlı randevu sihirbazı ve 3 dilli (TR/EN/AR RTL) sağlık turizmi platformu.",
        project_novadent_extra: "Uluslararası sağlık turizmi standartlarında tasarlanan NovaDent; hastaların diş hekimi seçebildiği, randevu oluşturup tek tıkla WhatsApp onayı alabildiği ve tedavi öncesi/sonrası gülüş simülasyonunu interaktif kaydırıcıyla test edebildiği yeni nesil bir dijital sağlık platformudur. Mobil uyumu, hızlı yüklenme süreleri ve Arapça için sağdan sola (RTL) tam dil desteği içerir.",
        project_kitaphane_title: "Kitaphane — Kütüphane & SaaS Yönetim Platformu",
        project_kitaphane_desc: "Next.js 16 ve Supabase bulut mimarisiyle geliştirilmiş; dinamik kitap kataloğu, üye yönetimi, emanet/iade takibi ve modern dashboard sunan tam kapsamlı SaaS otomasyonu.",
        project_kitaphane_extra: "Kütüphane ve kitap takip süreçlerini dijitalleştiren bu SaaS platformu; Supabase PostgreSQL ve güvenli kimlik doğrulama altyapısı üzerine inşa edilmiştir. Kitap ekleme/silme, filtreleme, üye durumları ve ödünç alma döngülerini gerçek zamanlı olarak yöneten modern ve duyarlı bir kontrol paneli sunar.",
        modal_extra_empty: "Bu proje hakkında ekstra bir bilgi bulunmuyor.",
        modal_badge_featured: "Öne Çıkan Proje",
        modal_meta_category: "Web Geliştirme • UI/UX",
        modal_meta_status: "Canlıda",
        modal_extra_title: "Proje Detayları & Mimari",
        modal_tech_label: "Kullanılan Teknolojiler",
        modal_badge_category: "Öne Çıkan Proje • Web & UI/UX",
        modal_showcase_badge: "Web Vitrini • 2026",
        modal_vision_title: "Proje Vizyonu & Mimarisi",
        modal_chip_year: "2026",
        modal_chip_completed: "Tamamlandı",
        modal_chip_live: "Canlıda",
        modal_close_title: "Kapat (Esc)",
        btn_live_view: "Canlı İzle",
        btn_github: "GitHub Kodu",
        sim_device_desktop: "Masaüstü",
        sim_device_tablet: "Tablet",
        sim_device_mobile: "Mobil",
        modal_tab_about: "Hakkında",
        modal_tab_live: "Canlı",
        modal_tab_about_badge: "Proje Detayları",
        modal_features_label: "Öne Çıkan Özellikler",
        sim_open_external: "Yeni Sekmede Aç",
        sim_reload: "Yeniden Yükle",
        sim_loading: "Canlı Arayüz Yükleniyor...",
        sim_live_active_hint: "Canlı İnteraktif Simülatör",
        sim_live_scroll_hint: "Çerçeve içinde kaydırma yapabilir ve butonlara tıklayabilirsiniz.",
        certs_empty_title: "Henüz Sertifika Eklenmedi",
        certs_empty_desc: "Eğitim süreçlerim ve katıldığım kurslar devam etmekte olup, tamamlandıkça doğrulanmış sertifikalar bu alanda listelenecektir.",
        certs_badge_status: "Doğrulanmış Uzmanlık & Sürekli Gelişim",
        cert_p1_title: "Next.js 16 & React Mimarisi",
        cert_p1_desc: "App Router, React Server Components (RSC), SSR/SSG ve modern render optimizasyonu.",
        cert_p2_title: "TypeScript & Tip Güvenliği",
        cert_p2_desc: "Strict mode, generic tip sistemleri, enterprise temiz kod standartları ve hatasız mimari.",
        cert_p3_title: "Supabase & PostgreSQL",
        cert_p3_desc: "İlişkisel veritabanı tasarımı, Row Level Security (RLS), OAuth ve gerçek zamanlı veri akışı.",
        cert_p4_title: "Performans & Core Web Vitals",
        cert_p4_desc: "Lighthouse 95+ metrikleri, sıfır layout shift (CLS), asset optimizasyonu ve SEO mükemmelliği.",
        sort_newest: "En Yeni",
        sort_oldest: "En Eski",
        contact_text: "Bana aşağıdaki e-posta adresinden veya GitHub üzerinden ulaşabilirsiniz.",
        contact_title: "Fikirleri Gerçeğe Dönüştürelim.",
        contact_desc: "Yeni projeler, freelance iş birlikleri veya modern yazılım çözümleri için benimle iletişime geçebilirsiniz. Fikirleri ölçeklenebilir ve nitelikli dijital ürünlere dönüştürmek için doğrudan bana ulaşın.",
        phone_label: "Telefon",
        email_label: "E-Posta",
        social_label: "Sosyal Medya",
        contact_status: "Görüşmelere & Projelere Açık",
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
        mobile_warn_btn: "Yine de Devam Et",
        form_heading: "Bana Mesaj Gönderin",
        form_name_placeholder: "Adınız Soyadınız",
        form_email_placeholder: "E-Posta Adresiniz",
        form_message_placeholder: "Projenizden veya fikrinizden bahsedin...",
        form_send_btn: "Mesajı Gönder",
        form_success: "Mesajınız başarıyla iletildi!",
        form_success_title: "Mesajınız Başarıyla İletildi!",
        form_success_desc: "Mesajınız doğrudan gelen kutuma ulaştı. En kısa sürede sizinle iletişime geçeceğim.",
        form_success_pill: "İletildi ✓",
        form_error: "Gönderilemedi. Lütfen tekrar deneyin.",
        form_error_title: "Gönderim Başarısız Oldu",
        form_error_desc: "Lütfen bilgilerinizi kontrol edip tekrar deneyin veya doğrudan e-posta gönderin.",
        form_error_pill: "Hata",
        form_btn_sent: "İletildi ✓",
        ctx_home: "Ana Sayfaya Dön",
        ctx_contact: "Bana Ulaşın",
        sel_copy: "Kopyala",
        sel_copied: "Kopyalandı!",
        play_snake: "Terminal: Snake.exe Başlat",
        sound_toggle_title: "Sesi Aç / Kapat",
        pause_hint: "[BOŞLUK] Duraklat",
        game_paused: "SİSTEM DONDURULDU // PAUSED",
        press_space_resume: "Devam etmek için BOŞLUK tuşuna basın",
        stat_food_eaten: "Toplanan Çekirdek",
        stat_max_combo: "Maksimum Kombo",
        stat_final_score: "Toplam Skor",
        golden_core_text: "Kuantum Çekirdeği! +25",
        combo_text: "KOMBO",
        sound_on: "SES: AÇIK",
        sound_off: "SES: KAPALI",
        mission_report_title: "// GÖREV DEBRİFİNGİ //",
        game_over: "Sistem Çöktü!",
        score_text: "Skor",
        high_score_text: "En Yüksek",
        world_small: "Küçük",
        world_medium: "Orta",
        world_large: "Büyük",
        select_world: "Harita Seçimi",
        start_game: "Oyuna Başla ➔",
        change_map: "Harita Değiştir 🗺️",
        restart_game: "Sistemi Yeniden Başlat ↻",
        term_btn_close: "Kapat",
        section_tag_about: "// 02. BÖLÜM: BİYOGRAFİ & YETENEKLER",
        section_title_about: "Hakkımda & Yetkinliklerim",
        section_desc_about: "Bilişim teknolojileri, modern arayüz mimarileri ve yapay zeka alanlarındaki vizyonumu, becerilerimi keşfedin.",
        section_tag_projects: "// 03. BÖLÜM: SEÇKİN ÇALIŞMALAR",
        section_title_projects: "Öne Çıkan Projelerim",
        section_desc_projects: "Kullanıcı deneyimini, performansı ve estetik kod mimarisini harmanlayarak geliştirdiğim dijital ürünler.",
        section_tag_certs: "// 04. BÖLÜM: KAZANIMLAR & BELGELER",
        section_title_certs: "Sertifikalar & Başarılar",
        section_desc_certs: "Sürekli gelişim ilkem doğrultusunda tamamladığım eğitimler ve kazandığım uluslararası yetkinlikler.",
        section_tag_contact: "// 05. BÖLÜM: İLETİŞİM & BAĞLANTI",
        section_title_contact: "Fikirleri Gerçeğe Dönüştürelim",
        section_desc_contact: "Yeni projeler, freelance iş birlikleri veya modern yazılım çözümleri için benimle dilediğiniz zaman iletişime geçebilirsiniz.",
        footer_cta_tag: "HAYDİ BAŞLAYALIM",
        footer_cta_title: "Birlikte harika bir proje geliştirelim.",
        footer_cta_desc: "Modern web geliştirme, danışmanlık veya profesyonel yazılım projeleri için her zaman bir mesaj uzağınızdayım.",
        footer_cta_btn: "İletişime Geç",
        footer_copy_email: "E-Postayı Kopyala",
        footer_copied_email: "Kopyalandı! ✓",
        footer_brand_desc: "Full Stack Web Geliştirici. Modern web teknolojileri, temiz kod ve kullanıcı deneyimi odaklı dijital çözümler üretiyorum.",
        footer_nav_heading: "Navigasyon",
        footer_social_heading: "Ağ & Bağlantı",
        footer_system_heading: "Sistem & Canlı Durum",
        footer_system_status: "Tüm Sistemler Aktif",
        footer_system_tech: "Three.js WebGL & JS",
        footer_made_with: "İstanbul'dan tutku ve temiz kod ile geliştirildi.",
        contact_card_headline: "Yeni Fırsatları Birlikte Konuşalım.",
        contact_card_subtext: "Modern web ve SaaS projeleri, danışmanlık veya merak ettiğiniz her konuda bana dilediğiniz zaman ulaşabilirsiniz.",
        contact_form_sub: "Formu doldurup gönderdiğinizde mesajınız anında e-posta kutuma ulaşır.",
        contact_label_name: "Adınız Soyadınız",
        contact_label_email: "E-Posta Adresiniz",
        contact_label_message: "Mesajınız",
        contact_title_email: "E-Posta Gönder",
        contact_title_github: "GitHub Profilim",
        info_location_val: "İstanbul, TR",
        cmd_placeholder: "Ne arıyorsunuz? (Örn: Projeler, İletişim...)",
        cmd_group_nav: "Navigasyon",
        cmd_group_contact: "İletişim & Sosyal",
        cmd_github: "GitHub Profilim",
        nav_cmd_title: "Komut Paletini Aç (Ctrl+K)",
        nav_lang_title: "Dili Değiştir / Switch Language",
        nav_menu_title: "Menüyü Aç",
        footer_scroll_top_title: "Sayfanın Başına Dön",
        aria_scroll_down: "Aşağı Kaydır",
        term_btn_restart: "Yeniden Başlat",
        term_btn_minimize: "Küçült",
        term_btn_maximize: "Büyüt",
        term_btn_prev_lang: "Önceki Dil",
        term_btn_next_lang: "Sonraki Dil",
        term_btn_run: "Kodu Çalıştır",
        term_btn_copy: "Kodu Kopyala",
        cli_placeholder: "Bir komut girin ('help')",
        term_status_ready: "Hazır",
        term_status_running: "Çalışıyor...",
        feat_ui_ux: "UI/UX Tasarım",
        feat_responsive: "Tam Mobil Uyum",
        feat_performance: "Yüksek Performans",
        feat_i18n_rtl: "3 Dil & RTL Desteği",
        feat_appointment: "Randevu Sihirbazı & WhatsApp",
        feat_slider: "Before/After Gülüş Simülatörü",
        feat_supabase: "Supabase PostgreSQL & Auth",
        feat_saas_dashboard: "Dinamik Yönetim Dashboard'u",
        feat_ssr_next: "Next.js SSR & Yüksek Hız",
        nav_theme_title: "Temayı Değiştir (Açık / Koyu)",
        cmd_toggle_theme: "Temayı Değiştir (Açık / Koyu)",
        cmd_group_theme: "Görünüm & Tema",
        theme_light: "Açık Mod",
        theme_dark: "Koyu Mod"
    },
    en: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
        nav_status: "Open to Work & New Projects",
        nav_search_text: "Quick Search...",
        nav_cta: "Get in Touch",
        hero_greeting_small: "Hello, my name is",
        hero_im: "I am a",
        hero_desc: "A Full Stack Web Developer building high-performance, aesthetic, and scalable digital products with React, Next.js, TypeScript, Supabase, and Three.js.",
        hero_badge: "Innovative Solutions",
        hero_btn: "View My Projects",
        hero_btn_contact: "Contact Me",
        about_badge_role: "Full Stack Web Engineer",
        about_telemetry_title: "// TELEMETRY & SPECS",
        about_signal_label: "Live",
        about_availability_title: "Availability",
        about_availability_val: "Open to New Projects",
        info_work_mode: "Work Mode:",
        info_work_mode_val: "Remote / Freelance",
        about_heading: "Full Stack & Web Developer",
        about_p1: "Hello, I am Samet Çolak. I am a Full Stack Developer focused on modern web ecosystems, seamless user experience, and scalable software architecture. I actively keep up with the latest technological paradigms, delivering products built on clean code and performance.",
        about_p2: "I craft end-to-end applications leveraging React, Next.js, TypeScript, and Supabase, enriched with Three.js interactive graphics. My goal is to transform ideas into impactful, sustainable digital solutions.",
        about_pillar1_title: "Modern Web & SaaS Architecture",
        about_pillar1_desc: "High-performance, responsive, and SEO-optimized web applications with Next.js 16, React, and TypeScript.",
        about_pillar2_title: "Backend & Data Architecture",
        about_pillar2_desc: "Secure, scalable data models and APIs with Supabase, PostgreSQL, and RESTful architectures.",
        about_pillar3_title: "3D Web & Interactive UI",
        about_pillar3_desc: "Fluid, aesthetic user experiences powered by Three.js, WebGL particle physics, and modern CSS.",
        info_age: "Age:",
        info_school: "Role:",
        info_role: "Role:",
        info_focus: "Focus:",
        info_location: "Location:",
        info_status: "Status:",
        info_status_val: "Active & Open to Work",
        skills_heading: "Technical Competencies",
        skills_subdesc: "Core technologies and modern tools I actively leverage in production.",
        skills_badge: "Core Tech Stack",
        skills_ecosystem_heading: "Dev Tools & Ecosystem",
        skills_meta_focus: "Domain Focus:",
        skills_meta_focus_val: "Full Stack & SaaS",
        skills_meta_code: "Code Standards:",
        skills_meta_code_val: "Clean & Modern",
        skills_meta_status: "Availability:",
        skills_meta_status_val: "Open to Projects",
        cat_frontend_title: "Frontend Architecture",
        cat_backend_title: "Backend & Database",
        cat_interactive_title: "3D Web & Graphics",
        cat_tools_title: "DevOps & Ecosystem",
        filter_all: "All",
        filter_web: "Frontend & Web",
        filter_core: "Software & Core",
        filter_emerging: "3D & AI",
        skill_level_advanced: "Advanced",
        skill_level_proficient: "Proficient",
        skill_level_intermediate: "Active",
        skill_ai: "AI Tools",
        skill_html_tag: "Modern Web & Responsive Architecture",
        skill_js_tag: "DOM, Async & Web API",
        skill_python_tag: "Algorithms, Automation & Data Processing",
        skill_cs_tag: "OOP & Desktop Architecture",
        skill_three_tag: "3D Interactive Scenes & Particle Physics",
        skill_ai_tag: "Workflow & Prompt Engineering",
        projects_empty_title: "Projects in Progress",
        projects_empty_desc: "Modern web and SaaS projects currently under development will be showcased here soon following final optimizations.",
        project_novadent_title: "NovaDent — Health Tourism & Dental Clinic Platform",
        project_novadent_desc: "A next-gen digital healthcare platform built with React 18 & Tailwind CSS, featuring an interactive Before/After simulator, 4-step booking wizard, and 3-language (TR/EN/AR RTL) support.",
        project_novadent_extra: "Designed according to international health tourism standards, NovaDent is a modern digital health platform where patients can select doctors, book dynamic appointments with automated WhatsApp confirmation, and experience interactive before/after smile transformations. Features full responsive design, rapid load speeds, and right-to-left (RTL) Arabic support.",
        project_kitaphane_title: "Kitaphane — Cloud Library & SaaS Management System",
        project_kitaphane_desc: "A comprehensive SaaS platform built with Next.js 16 and Supabase cloud architecture, featuring dynamic cataloging, user authentication, and loan tracking.",
        project_kitaphane_extra: "Modernizing library and inventory management, this SaaS platform is powered by Supabase PostgreSQL and secure authentication. It provides real-time book borrowing tracking, member status monitoring, advanced filtering, and a sleek responsive administrative dashboard.",
        modal_extra_empty: "There is no extra information about this project.",
        modal_badge_featured: "Featured Project",
        modal_meta_category: "Web Development • UI/UX",
        modal_meta_status: "Live",
        modal_extra_title: "Project Details & Architecture",
        modal_tech_label: "Technologies Used",
        modal_badge_category: "Featured Project • Web & UI/UX",
        modal_showcase_badge: "Web Showcase • 2026",
        modal_vision_title: "Project Vision & Architecture",
        modal_chip_year: "2026",
        modal_chip_completed: "Completed",
        modal_chip_live: "Live",
        modal_close_title: "Close (Esc)",
        btn_live_view: "Live View",
        btn_github: "GitHub Code",
        sim_device_desktop: "Desktop",
        sim_device_tablet: "Tablet",
        sim_device_mobile: "Mobile",
        modal_tab_about: "About",
        modal_tab_live: "Live",
        modal_tab_about_badge: "Project Details",
        modal_features_label: "Key Features",
        sim_open_external: "Open in New Tab",
        sim_reload: "Reload",
        sim_loading: "Loading Live Interface...",
        sim_live_active_hint: "Live Interactive Simulator",
        sim_live_scroll_hint: "You can freely scroll and click inside the frame.",
        certs_empty_title: "No Certificates Added Yet",
        certs_empty_desc: "My coursework and specialization trainings are actively ongoing. Verified certificates will be featured in this space as they are completed.",
        certs_badge_status: "Verified Competencies & Continuous Learning",
        cert_p1_title: "Next.js 16 & React Architecture",
        cert_p1_desc: "App Router, React Server Components (RSC), SSR/SSG, and modern render optimization.",
        cert_p2_title: "TypeScript & Type Safety",
        cert_p2_desc: "Strict mode, generic type systems, clean enterprise code standards, and error-free architecture.",
        cert_p3_title: "Supabase & PostgreSQL",
        cert_p3_desc: "Relational database design, Row Level Security (RLS), OAuth, and realtime data streaming.",
        cert_p4_title: "Performance & Core Web Vitals",
        cert_p4_desc: "Lighthouse 95+ metrics, zero cumulative layout shift (CLS), asset optimization, and SEO excellence.",
        sort_newest: "Newest",
        sort_oldest: "Oldest",
        contact_text: "You can reach me via the email below or through GitHub.",
        contact_title: "Let's Turn Ideas Into Reality.",
        contact_desc: "Feel free to reach out for new projects, freelance collaborations, or modern software solutions. Contact me directly to transform ideas into scalable, high-quality digital products.",
        phone_label: "Phone",
        email_label: "Email",
        social_label: "Social Media",
        contact_status: "Available for Projects & Collaborations",
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
        mobile_warn_btn: "Continue Anyway",
        form_heading: "Send Me a Message",
        form_name_placeholder: "Your Full Name",
        form_email_placeholder: "Your Email Address",
        form_message_placeholder: "Tell me about your project or idea...",
        form_send_btn: "Send Message",
        form_success: "Your message has been sent successfully!",
        form_success_title: "Message Sent Successfully!",
        form_success_desc: "Your message has reached my inbox. I will get back to you shortly.",
        form_success_pill: "Delivered ✓",
        form_error: "Failed to send. Please try again.",
        form_error_title: "Submission Failed",
        form_error_desc: "Please check your information and try again or reach out directly via email.",
        form_error_pill: "Failed",
        form_btn_sent: "Sent ✓",
        ctx_home: "Back to Home",
        ctx_contact: "Contact Me",
        sel_copy: "Copy",
        sel_copied: "Copied!",
        play_snake: "Terminal: Run Snake.exe",
        sound_toggle_title: "Toggle Sound FX",
        pause_hint: "[SPACE] Pause",
        game_paused: "SYSTEM FROZEN // PAUSED",
        press_space_resume: "Press SPACE to Resume",
        stat_food_eaten: "Cores Consumed",
        stat_max_combo: "Max Combo",
        stat_final_score: "Final Score",
        golden_core_text: "Quantum Core! +25",
        combo_text: "COMBO",
        sound_on: "AUDIO: ON",
        sound_off: "AUDIO: OFF",
        mission_report_title: "// MISSION DEBRIEF //",
        game_over: "System Failure!",
        score_text: "Score",
        high_score_text: "Best",
        world_small: "Small",
        world_medium: "Medium",
        world_large: "Large",
        select_world: "Select Map",
        start_game: "Start Game ➔",
        change_map: "Change Map 🗺️",
        restart_game: "Restart System ↻",
        term_btn_close: "Close",
        section_tag_about: "// SECTION 02: BIOGRAPHY & SKILLS",
        section_title_about: "About Me & Core Competencies",
        section_desc_about: "Explore my background in information technologies, frontend development, and modern AI tool integrations.",
        section_tag_projects: "// SECTION 03: FEATURED WORKS",
        section_title_projects: "Featured Projects",
        section_desc_projects: "Digital products crafted with a focus on seamless user experience, high performance, and clean code.",
        section_tag_certs: "// SECTION 04: CREDENTIALS & ACHIEVEMENTS",
        section_title_certs: "Certificates & Achievements",
        section_desc_certs: "Coursework and qualifications acquired in line with my principle of continuous professional development.",
        section_tag_contact: "// SECTION 05: GET IN TOUCH",
        section_title_contact: "Let's Build Something Great",
        section_desc_contact: "Feel free to reach out for new projects, freelance collaborations, or modern software solutions.",
        footer_cta_tag: "LET'S COLLABORATE",
        footer_cta_title: "Let's build something extraordinary together.",
        footer_cta_desc: "Always a message away for modern web development, consulting, or innovative software projects.",
        footer_cta_btn: "Get in Touch",
        footer_copy_email: "Copy Email",
        footer_copied_email: "Copied! ✓",
        footer_brand_desc: "Full Stack Web Developer. Building user-centric web applications with clean code and modern architecture.",
        footer_nav_heading: "Navigation",
        footer_social_heading: "Connect & Social",
        footer_system_heading: "System & Telemetry",
        footer_system_status: "All Systems Operational",
        footer_system_tech: "Three.js WebGL & JS",
        footer_made_with: "Crafted with passion and clean code in Istanbul.",
        contact_card_headline: "Let's Discuss New Opportunities Together.",
        contact_card_subtext: "Feel free to reach out anytime for modern web & SaaS projects, consulting, or inquiries.",
        contact_form_sub: "Fill out the form and your message will reach my inbox instantly.",
        contact_label_name: "Your Full Name",
        contact_label_email: "Your Email Address",
        contact_label_message: "Your Message",
        contact_title_email: "Send Email",
        contact_title_github: "My GitHub Profile",
        info_location_val: "Istanbul, TR",
        cmd_placeholder: "What are you looking for? (e.g. Projects, Contact...)",
        cmd_group_nav: "Navigation",
        cmd_group_contact: "Contact & Social",
        cmd_github: "My GitHub Profile",
        nav_cmd_title: "Open Command Palette (Ctrl+K)",
        nav_lang_title: "Switch Language / Dili Değiştir",
        nav_menu_title: "Open Menu",
        footer_scroll_top_title: "Back to Top",
        aria_scroll_down: "Scroll Down",
        term_btn_restart: "Restart",
        term_btn_minimize: "Minimize",
        term_btn_maximize: "Maximize",
        term_btn_prev_lang: "Previous Language",
        term_btn_next_lang: "Next Language",
        term_btn_run: "Run Code",
        term_btn_copy: "Copy Code",
        cli_placeholder: "Enter a command ('help')",
        term_status_ready: "Ready",
        term_status_running: "Running...",
        feat_ui_ux: "UI/UX Design",
        feat_responsive: "Fully Responsive",
        feat_performance: "High Performance",
        feat_i18n_rtl: "3-Language & Native RTL",
        feat_appointment: "Booking Wizard & WhatsApp",
        feat_slider: "Before/After Smile Simulator",
        feat_supabase: "Supabase PostgreSQL & Auth",
        feat_saas_dashboard: "Dynamic Management Dashboard",
        feat_ssr_next: "Next.js SSR & High Speed",
        nav_theme_title: "Toggle Theme (Light / Dark)",
        cmd_toggle_theme: "Toggle Theme (Light / Dark)",
        cmd_group_theme: "Appearance & Theme",
        theme_light: "Light Mode",
        theme_dark: "Dark Mode"
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'tr';
window.translations = translations;
window.currentLang = currentLang;
const langBtn = document.getElementById('lang-btn');
let originalTitle = document.title;

function updateLanguage(lang) {
    currentLang = lang;
    window.currentLang = lang;
    document.documentElement.lang = lang;
    
    // 1. data-i18n (Metin ve HTML içerikler)
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.innerHTML = translations[lang][key];
        }
    });

    // 2. data-i18n-placeholder (Form ve Arama Placeholder'ları)
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.setAttribute('placeholder', translations[lang][key]);
            element.placeholder = translations[lang][key];
        }
    });

    // 3. data-i18n-title (Tooltip ve Title etiketleri)
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.setAttribute('title', translations[lang][key]);
            element.title = translations[lang][key];
        }
    });

    // 4. data-i18n-aria-label (Erişilebilirlik etiketleri)
    const ariaElements = document.querySelectorAll('[data-i18n-aria-label]');
    ariaElements.forEach(element => {
        const key = element.getAttribute('data-i18n-aria-label');
        if (translations[lang] && translations[lang][key] !== undefined) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });
    
    // 5. Dil Buton Metni
    const langText = document.getElementById('lang-text');
    if (langText) langText.textContent = lang === 'tr' ? 'EN' : 'TR';
    
    // 6. Sayfa Başlığı (Title) ve Meta Açıklaması
    const is404 = window.location.pathname.includes('404') || document.querySelector('.error-hero') !== null;
    if (is404) {
        document.title = lang === 'tr'
            ? "Sayfa Bulunamadı | Samet Çolak"
            : "Page Not Found | Samet Çolak";
    } else {
        document.title = lang === 'tr' 
            ? "Samet Çolak — Portfolyo"
            : "Samet Çolak — Portfolio";
    }
    if (!document.hidden) {
        originalTitle = document.title;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        if (is404) {
            metaDesc.setAttribute('content', lang === 'tr'
                ? "Aradığınız sayfa bulunamadı. Samet Çolak portfolyosuna geri dönün."
                : "The page you are looking for could not be found. Return to Samet Çolak's portfolio."
            );
        } else {
            metaDesc.setAttribute('content', lang === 'tr'
                ? "Samet Çolak kişisel portfolyo web sitesi. Modern web teknolojileri, temiz kod ve kullanıcı odaklı dijital çözümler."
                : "Samet Çolak personal portfolio website. Modern web technologies, clean code, and user-centric digital solutions."
            );
        }
    }

    // 7. Mobil Menüdeki Tema Rozeti
    updateThemeUI(getCurrentTheme());
}

// --- AÇIK / KOYU TEMA YÖNETİMİ (LIGHT / DARK MODE) ---
function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function updateThemeUI(theme) {
    const mobileBadge = document.getElementById('mobile-theme-badge');
    if (mobileBadge) {
        mobileBadge.textContent = theme === 'light' 
            ? (translations[currentLang]?.theme_light || 'Açık Mod') 
            : (translations[currentLang]?.theme_dark || 'Koyu Mod');
    }
}

function setTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('portfolio_theme', theme);
    
    if (window.setThreeTheme) {
        window.setThreeTheme(theme);
    }
    
    updateThemeUI(theme);
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: theme }));
}

function toggleTheme() {
    const current = getCurrentTheme();
    const nextTheme = current === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
}

// Başlangıç tema senkronizasyonu
const savedTheme = localStorage.getItem('portfolio_theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (window.setThreeTheme) window.setThreeTheme('light');
    updateThemeUI('light');
} else {
    updateThemeUI('dark');
}

// Tema butonları
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
}

const mobileThemeBtn = document.getElementById('mobile-theme-btn');
if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', toggleTheme);
}

updateLanguage(currentLang); // Sayfa açılır açılmaz dili uygula

if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        localStorage.setItem('portfolio_lang', currentLang); // Dili tarayıcıya kaydet
        updateLanguage(currentLang);
        
        // Yeni Dil ayarını diğer sayfa modüllerine duyur (Custom Event)
        window.dispatchEvent(new CustomEvent('langChanged', { detail: currentLang }));
    });
}

// --- BAŞKA SEKMEYE GİDİNCE ÇIKAN YAZI (TITLE EFEKTİ) ---
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        originalTitle = document.title; // Kullanıcı sekmeyi terk ettiğinde güncel başlığı sakla
        const is404 = window.location.pathname.includes('404') || document.querySelector('.error-hero') !== null;
        if (is404) {
            document.title = currentLang === 'tr' 
                ? "Geri Dön | Samet Çolak" 
                : "Return | Samet Çolak";
        } else {
            document.title = currentLang === 'tr' 
                ? "Keşfetmeye Devam Edin | Samet Çolak" 
                : "Continue Exploring | Samet Çolak";
        }
    } else {
        document.title = originalTitle; // Geri döndüğünde orijinal başlığı geri yükle
    }
});

// --- MOBİL HAMBURGER MENÜ YÖNETİMİ ---
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

if (hamburger && navLinksContainer) {
    const closeDrawer = () => {
        navLinksContainer.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinksContainer.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Bir linke tıklandığında menüyü otomatik kapat
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    // Menü dışına tıklandığında veya dokunulduğunda menüyü kapat
    document.addEventListener('click', (e) => {
        if (navLinksContainer.classList.contains('nav-active') && !navLinksContainer.contains(e.target) && !hamburger.contains(e.target)) {
            closeDrawer();
        }
    });

    // Escape tuşuyla kapat
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinksContainer.classList.contains('nav-active')) {
            closeDrawer();
        }
    });
}

// --- ÖZEL İMLEÇ (CUSTOM CURSOR) ---
if (window.matchMedia("(pointer: fine)").matches) {
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    const bgShapes = document.querySelectorAll('.shape');

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
}

// --- URL'DEN INDEX.HTML UZANTISINI GİZLEME (CLEAN URL) ---
if (window.location.protocol !== 'file:') {
    const pName = window.location.pathname;
    // 404 sayfasındayken URL'i asla /404 yapma (F5 atınca sunucu 404 hatası verir)
    if (!pName.includes('404')) {
        if (pName.endsWith('/index.html') || pName === '/index.html' || pName === 'index.html') {
            const cleanPath = pName.replace(/\/index\.html$/, '/') || '/';
            const cleanUrl = cleanPath + window.location.search + window.location.hash;
            window.history.replaceState(null, '', cleanUrl);
        }
    }
}

// --- PROJE DETAY MODALI SİSTEMİ ---
const projectModal = document.getElementById('project-modal');
const projectCards = document.querySelectorAll('.project-card');

if (projectModal && projectCards.length > 0) {
    const modalCloseBtn = projectModal.querySelector('#modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalExtra = document.getElementById('modal-extra');
    const modalTech = document.getElementById('modal-tech');
    const modalLinks = document.getElementById('modal-links');
    const modalFeaturesList = document.getElementById('modal-features-list');

    const openModal = () => {
        // Windows kaydırma çubuğu genişliğini hesaplayıp sıçramayı (layout shift) engelle
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        document.body.style.overflow = 'hidden';
        projectModal.classList.add('active');
        if (modalCloseBtn) modalCloseBtn.focus();
    };

    const closeModal = () => {
        projectModal.classList.remove('active');
        setTimeout(() => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }, 250);
    };

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Eğer doğrudan butonlara veya linke tıklandıysa pop-up açma (orijinal linke gitsin)
            if (e.target.closest('.project-links') || e.target.closest('a')) return;

            // Başlık
            const titleElem = card.querySelector('.project-title');
            if (modalTitle && titleElem) modalTitle.innerHTML = titleElem.innerHTML;

            // Birincil Açıklama
            const descElement = card.querySelector('p[data-i18n]');
            if (modalDesc && descElement) {
                modalDesc.setAttribute('data-i18n', descElement.getAttribute('data-i18n'));
                modalDesc.innerHTML = descElement.innerHTML;
            }

            // Teknolojiler
            const techElem = card.querySelector('.project-tech');
            if (modalTech && techElem) modalTech.innerHTML = techElem.innerHTML;

            // Butonlar
            const linksElem = card.querySelector('.project-links');
            if (modalLinks && linksElem) modalLinks.innerHTML = linksElem.innerHTML;

            // Öne Çıkan Özellikler Listesi
            const featuresElem = card.querySelector('.project-features');
            if (modalFeaturesList && featuresElem) {
                modalFeaturesList.innerHTML = featuresElem.innerHTML;
            }

            // Kapak Görseli
            const imgElem = card.querySelector('.project-img');
            if (imgElem && modalImg) {
                const bgImage = window.getComputedStyle(imgElem).backgroundImage;
                const cleanUrl = bgImage.replace(/(url\(|\)|"|')/g, '');
                modalImg.src = cleanUrl !== 'none' ? cleanUrl : '';
            }

            // Mimari & Vizyon Ekstra Açıklaması
            const extraKey = card.getAttribute('data-i18n-extra');
            if (modalExtra) {
                if (extraKey && translations[currentLang] && translations[currentLang][extraKey]) {
                    modalExtra.setAttribute('data-i18n', extraKey);
                    modalExtra.innerHTML = translations[currentLang][extraKey];
                } else {
                    modalExtra.setAttribute('data-i18n', 'modal_extra_empty');
                    modalExtra.innerHTML = translations[currentLang]?.modal_extra_empty || '';
                }
            }

            openModal();
        });
    });

    // Modalı Kapatma Olayları
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal || e.target.classList.contains('modal-backdrop-glow')) {
            closeModal();
        }
    });

    // Esc tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// --- SİNEMATİK AÇILIŞ & YÜKLEME EKRANI (CINEMATIC PRELOADER) ---
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
        const barFill = document.getElementById('preloader-bar-fill');
        const counterEl = document.getElementById('preloader-counter');

        let currentPercent = 0;
        let isDone = false;
        let isPageLoaded = (document.readyState === 'complete');

        const markPageLoaded = () => {
            isPageLoaded = true;
        };

        if (!isPageLoaded) {
            window.addEventListener('load', markPageLoaded);
        }

        const startTime = performance.now();
        const duration = 1350; // İdeal sinematik akış süresi

        function updateProgress(now) {
            if (isDone) return;
            const elapsed = now - startTime;
            let targetPercent = Math.min((elapsed / duration) * 100, 95);

            if (isPageLoaded && elapsed > 950) {
                targetPercent = 100;
            }

            currentPercent += (targetPercent - currentPercent) * 0.16;

            if (targetPercent >= 100 && (100 - currentPercent) < 0.6) {
                currentPercent = 100;
            }

            const rounded = Math.min(Math.round(currentPercent), 100);

            if (barFill) barFill.style.width = `${rounded}%`;
            if (counterEl) counterEl.textContent = `${rounded}%`;

            if (rounded >= 100) {
                isDone = true;
                setTimeout(() => {
                    preloader.classList.add('loaded');
                    sessionStorage.setItem('siteLoaded', 'true');
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 800);
                }, 200);
                return;
            }

            requestAnimationFrame(updateProgress);
        }

        requestAnimationFrame(updateProgress);

        // Güvenlik zaman aşımı (CDN vb. gecikmelerde kilitlenmeyi önler)
        setTimeout(() => {
            if (!isDone) {
                isDone = true;
                if (barFill) barFill.style.width = '100%';
                if (counterEl) counterEl.textContent = '100%';
                preloader.classList.add('loaded');
                sessionStorage.setItem('siteLoaded', 'true');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);
            }
        }, 2800);
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

// --- 3D SCROLL HUD WAYPOINTS (SAĞ TARAF GEZİNTİ İNDİKATÖRÜ VE SCROLL SPY) ---
(function initHudWaypoints() {
    const hudPoints = document.querySelectorAll('.hud-point');
    const hudLineProgress = document.querySelector('.hud-line-progress');
    if (!hudPoints.length) return;

    function getDocTop(el) {
        return el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    }

    const sections = [];
    hudPoints.forEach(point => {
        const targetId = point.getAttribute('data-section') || point.getAttribute('href')?.replace('#', '');
        const sectionEl = document.getElementById(targetId);
        if (sectionEl) {
            sections.push({
                id: targetId,
                el: sectionEl,
                point: point
            });
        }
    });

    if (!sections.length) return;

    let activeId = null;

    function updateWaypoints() {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const maxScroll = Math.max(1, docHeight - windowHeight);

        // Sayfa en sonuna (İletişim / Footer) gelindiğinde son noktayı aktif yap
        const isBottom = (windowHeight + scrollY) >= (docHeight - 100);

        let activeIndex = 0;

        if (isBottom) {
            activeIndex = sections.length - 1;
        } else {
            // Kullanıcının baktığı üst odak çizgisi (viewport'un %35'i)
            const focusLine = windowHeight * 0.35;
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].el.getBoundingClientRect();
                if (rect.top <= focusLine) {
                    activeIndex = i;
                }
            }
        }

        const currentSec = sections[activeIndex];
        if (currentSec && currentSec.id !== activeId) {
            activeId = currentSec.id;
            sections.forEach((item, idx) => {
                if (idx === activeIndex) {
                    item.point.classList.add('active');
                } else {
                    item.point.classList.remove('active');
                }
            });

            // Varsa mobil çekmece menü linklerini de senkronize et
            const mobileLinks = document.querySelectorAll('.nav-links li a');
            mobileLinks.forEach(link => {
                const href = link.getAttribute('href')?.replace('#', '');
                if (href === currentSec.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        // Dikey neon çizginin ilerleme yüzdesini noktaların konumuna göre pürüzsüz hesapla
        if (hudLineProgress && sections.length > 1) {
            let totalProgress = 0;
            if (isBottom || scrollY >= maxScroll - 10) {
                totalProgress = 100;
            } else {
                let found = false;
                for (let i = 0; i < sections.length - 1; i++) {
                    const startY = i === 0 ? 0 : Math.max(0, getDocTop(sections[i].el) - 100);
                    const endY = Math.max(startY + 50, getDocTop(sections[i + 1].el) - 100);

                    if (scrollY >= startY && scrollY < endY) {
                        const fraction = Math.min(1, Math.max(0, (scrollY - startY) / (endY - startY)));
                        totalProgress = ((i + fraction) / (sections.length - 1)) * 100;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    const lastStartY = Math.max(0, getDocTop(sections[sections.length - 1].el) - 100);
                    if (scrollY >= lastStartY) {
                        totalProgress = 100;
                    } else {
                        totalProgress = 0;
                    }
                }
            }
            hudLineProgress.style.height = `${Math.min(100, Math.max(0, totalProgress))}%`;
        }
    }

    // Tıklama etkileşimi: Noktaya tıklandığında ilgili bölüme pürüzsüz kaydır
    sections.forEach((item) => {
        item.point.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTop = item.id === 'home' ? 0 : Math.max(0, getDocTop(item.el) - 85);
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        });
    });

    // Yüksek Performanslı Scroll ve Resize Dinleyicisi (rAF throttled)
    let ticking = false;
    function requestUpdate() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateWaypoints();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    // Sayfa açıldığında veya yenilendiğinde hemen hesapla
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateWaypoints);
    } else {
        updateWaypoints();
    }
    window.addEventListener('load', updateWaypoints);
})();

// --- AŞAĞI KAYDIRDIKÇA BELİRME (SCROLL FADE-IN) EFEKTİ ---
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.08
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

// --- YUMUŞAK VE ANİMASYONLU SCROLL MOTORU (SMOOTH MOMENTUM SCROLL) ---
(function initSmoothScroll() {
    // Mobil veya dokunmatik ekranlı cihazlarda yerel dokunma momentumunu koru
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isRunning = false;
    const ease = 0.08; // Akıcı ve pürüzsüz süzülme katsayısı

    window.addEventListener('wheel', (e) => {
        // Modal, komut paleti açıkken veya Ctrl/Alt basılıyken varsayılan davranışı koru
        if (document.body.style.overflow === 'hidden' || e.ctrlKey || e.altKey) return;

        // İçerisinde bağımsız kaydırma çubuğu olan öğeler (kod kutusu, textarea vb.)
        if (e.target.closest('.modal, .cmd-palette-container, textarea, #cli-output')) return;

        e.preventDefault();

        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        targetY = Math.min(Math.max(0, targetY + e.deltaY * 1.05), maxScroll);

        if (!isRunning) {
            isRunning = true;
            requestAnimationFrame(renderScroll);
        }
    }, { passive: false });

    function renderScroll() {
        const diff = targetY - currentY;
        currentY += diff * ease;

        if (Math.abs(diff) > 0.6) {
            window.scrollTo({ top: Math.round(currentY), behavior: 'instant' });
            requestAnimationFrame(renderScroll);
        } else {
            currentY = targetY;
            window.scrollTo({ top: targetY, behavior: 'instant' });
            isRunning = false;
        }
    }

    // Harici scroll hareketlerinde (scrollbar sürükleme, klavye vb.) hedefi senkronize et
    window.addEventListener('scroll', () => {
        if (!isRunning) {
            targetY = window.scrollY;
            currentY = window.scrollY;
        }
    }, { passive: true });

    // Sayfa içi anchor (#) bağlantılarına tıklandığında hedefi senkronize et
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                targetY = window.scrollY;
                currentY = window.scrollY;
                isRunning = false;
            }, 80);
        });
    });

    window.addEventListener('resize', () => {
        const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        targetY = Math.min(targetY, maxScroll);
        currentY = Math.min(currentY, maxScroll);
    });
})();

// --- YUKARI ÇIK (SCROLL TO TOP) BUTONU ---
document.querySelectorAll('.scroll-top, .scroll-top-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// --- TERMINAL KOD DEĞİŞTİRME MOTORU ---
document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById('prev-code');
    const nextBtn = document.getElementById('next-code');
    const fileNameDisplay = document.getElementById('current-file-name');
    const codeDisplay = document.getElementById('code-to-copy');

    if (prevBtn && nextBtn && fileNameDisplay && codeDisplay) {
        const codeGutter = document.getElementById('code-gutter');
        const fileIconDot = document.getElementById('file-icon-dot');
        const termStatusLang = document.getElementById('term-status-lang');
        const termGlow = document.querySelector('.terminal-glow');

        const codeSnippets = [
            {
                file: "developer.py",
                lang: "Python",
                color: "#38bdf8",
                glow: "rgba(0, 210, 255, 0.18)",
                code: `<span class="term-comment"># Samet Çolak - Profil</span>\n<span class="term-keyword">class</span> <span class="term-variable">Developer</span>:\n    <span class="term-keyword">def</span> <span class="term-property">__init__</span>(<span class="term-variable">self</span>):\n        <span class="term-variable">self</span>.<span class="term-property">name</span> <span class="term-operator">=</span> <span class="term-string">"Samet Çolak"</span>\n        <span class="term-variable">self</span>.<span class="term-property">role</span> <span class="term-operator">=</span> <span class="term-string">"Full Stack Web Developer"</span>\n        <span class="term-variable">self</span>.<span class="term-property">skills</span> <span class="term-operator">=</span> [<span class="term-string">"Next.js"</span>, <span class="term-string">"React"</span>, <span class="term-string">"TypeScript"</span>]\n        <span class="term-variable">self</span>.<span class="term-property">database</span> <span class="term-operator">=</span> <span class="term-string">"Supabase / PostgreSQL"</span>\n        <span class="term-variable">self</span>.<span class="term-property">available</span> <span class="term-operator">=</span> <span class="term-keyword">True</span>`
            },
            {
                file: "developer.ts",
                lang: "TypeScript",
                color: "#3178c6",
                glow: "rgba(49, 120, 198, 0.18)",
                code: `<span class="term-comment">// Samet Çolak - Profil</span>\n<span class="term-keyword">interface</span> <span class="term-variable">Profile</span> {\n    <span class="term-property">name</span>: <span class="term-keyword">string</span>;\n    <span class="term-property">role</span>: <span class="term-string">"Full Stack Web Developer"</span>;\n    <span class="term-property">skills</span>: <span class="term-keyword">string</span>[];\n}\n<span class="term-keyword">const</span> <span class="term-variable">samet</span>: <span class="term-variable">Profile</span> = {\n    <span class="term-property">name</span>: <span class="term-string">"Samet Çolak"</span>,\n    <span class="term-property">role</span>: <span class="term-string">"Full Stack Web Developer"</span>,\n    <span class="term-property">skills</span>: [<span class="term-string">"Next.js 16"</span>, <span class="term-string">"React"</span>, <span class="term-string">"TypeScript"</span>],\n    <span class="term-property">available</span>: <span class="term-keyword">true</span>\n};`
            },
            {
                file: "developer.cs",
                lang: "C#",
                color: "#c084fc",
                glow: "rgba(192, 132, 252, 0.16)",
                code: `<span class="term-comment">// Samet Çolak - Profil</span>\n<span class="term-keyword">public class</span> <span class="term-variable">Developer</span> {\n    <span class="term-keyword">public string</span> <span class="term-property">Name</span> <span class="term-operator">=</span> <span class="term-string">"Samet Çolak"</span>;\n    <span class="term-keyword">public string</span> <span class="term-property">Role</span> <span class="term-operator">=</span> <span class="term-string">"Full Stack Web Developer"</span>;\n    <span class="term-keyword">public string[]</span> <span class="term-property">Skills</span> <span class="term-operator">=</span> {<span class="term-string">"Next.js"</span>, <span class="term-string">"React"</span>, <span class="term-string">"TypeScript"</span>};\n    <span class="term-keyword">public string</span> <span class="term-property">Database</span> <span class="term-operator">=</span> <span class="term-string">"Supabase"</span>;\n    <span class="term-keyword">public bool</span> <span class="term-property">IsAvailable</span> <span class="term-operator">=</span> <span class="term-keyword">true</span>;\n}`
            },
            {
                file: "developer.html",
                lang: "HTML5",
                color: "#fb923c",
                glow: "rgba(251, 146, 60, 0.15)",
                code: `<span class="term-comment">&lt;!-- Samet Çolak - Profil --&gt;</span>\n<span class="term-keyword">&lt;div</span> <span class="term-property">class=</span><span class="term-string">"developer-card"</span><span class="term-keyword">&gt;</span>\n    <span class="term-keyword">&lt;h1&gt;</span>Samet Çolak<span class="term-keyword">&lt;/h1&gt;</span>\n    <span class="term-keyword">&lt;p&gt;</span>Full Stack Web Developer<span class="term-keyword">&lt;/p&gt;</span>\n    <span class="term-keyword">&lt;ul</span> <span class="term-property">class=</span><span class="term-string">"stack"</span><span class="term-keyword">&gt;</span>\n        <span class="term-keyword">&lt;li&gt;</span>Next.js &amp; React<span class="term-keyword">&lt;/li&gt;</span>\n        <span class="term-keyword">&lt;li&gt;</span>TypeScript &amp; Supabase<span class="term-keyword">&lt;/li&gt;</span>\n    <span class="term-keyword">&lt;/ul&gt;</span>\n<span class="term-keyword">&lt;/div&gt;</span>`
            },
            {
                file: "developer.css",
                lang: "CSS3",
                color: "#60a5fa",
                glow: "rgba(96, 165, 250, 0.15)",
                code: `<span class="term-comment">/* Samet Çolak - Profil */</span>\n<span class="term-keyword">.developer</span> {\n    <span class="term-property">--name</span>: <span class="term-string">"Samet Çolak"</span>;\n    <span class="term-property">--role</span>: <span class="term-string">"Full Stack Web Developer"</span>;\n    <span class="term-property">--skills</span>: <span class="term-string">"Next.js, React, TypeScript"</span>;\n    <span class="term-property">--database</span>: <span class="term-string">"Supabase"</span>;\n    <span class="term-property">quality</span>: <span class="term-variable">premium</span>;\n}`
            }
        ];

        let currentIndex = 0;

        function updateTerminal(index) {
            codeDisplay.style.opacity = 0;
            fileNameDisplay.style.opacity = 0;
            if (codeGutter) codeGutter.style.opacity = 0;
            
            setTimeout(() => {
                const target = codeSnippets[index];
                fileNameDisplay.textContent = target.file;
                codeDisplay.innerHTML = target.code;

                // Satır numaralarını senkronize et
                const lineCount = target.code.split('\n').length;
                if (codeGutter) {
                    codeGutter.innerHTML = Array.from({length: lineCount}, (_, i) => `<span>${i + 1}</span>`).join('');
                    codeGutter.style.opacity = 1;
                }

                // IDE Status Bar güncellemeleri
                const termStatusPos = document.getElementById('term-status-pos');
                if (termStatusPos) termStatusPos.textContent = `Ln ${lineCount}, Col 1`;

                // Dil rozeti ve dosya ikon noktası
                if (termStatusLang) termStatusLang.textContent = target.lang;
                if (fileIconDot) {
                    fileIconDot.style.backgroundColor = target.color;
                    fileIconDot.style.boxShadow = `0 0 10px ${target.color}`;
                }

                // Ambiyans ışığını dil rengine hafifçe tonla
                if (termGlow) {
                    termGlow.style.background = `radial-gradient(circle at center, ${target.glow} 0%, transparent 60%)`;
                }

                codeDisplay.style.opacity = 1;
                fileNameDisplay.style.opacity = 1;
            }, 180);
        }

        prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + codeSnippets.length) % codeSnippets.length; updateTerminal(currentIndex); });
        nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % codeSnippets.length; updateTerminal(currentIndex); });
        
        codeDisplay.style.transition = "opacity 0.2s ease";
        fileNameDisplay.style.transition = "opacity 0.2s ease";
        if (codeGutter) codeGutter.style.transition = "opacity 0.2s ease";
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
        const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || !window.location.pathname || window.location.pathname.endsWith('/');
        const pathPrefix = isHome ? '' : 'index.html';
        const cmdMenuHTML = `
            <div id="cmd-palette" class="cmd-palette-overlay">
                <div class="cmd-palette-container">
                    <div class="cmd-header">
                        <svg class="cmd-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="text" id="cmd-input" placeholder="Ne arıyorsunuz? (Örn: Projeler, İletişim...)" data-i18n-placeholder="cmd_placeholder">
                        <span class="cmd-esc">ESC</span>
                    </div>
                    <div class="cmd-body">
                        <div class="cmd-group" data-group="Navigasyon">
                            <div class="cmd-group-title" data-i18n="cmd_group_nav">Navigasyon</div>
                            <a href="${pathPrefix}#home" class="cmd-item active" data-keywords="ana sayfa home index">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span data-i18n="home">Ana Sayfa</span>
                            </a>
                            <a href="${pathPrefix}#about" class="cmd-item" data-keywords="hakkımda about me kimdir yetenekler">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <span data-i18n="about">Hakkımda</span>
                            </a>
                            <a href="${pathPrefix}#projects" class="cmd-item" data-keywords="projeler projects işler portfolyo">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                <span data-i18n="projects">Projeler</span>
                            </a>
                            <a href="${pathPrefix}#certificates" class="cmd-item" data-keywords="sertifikalar certificates belgeler">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <span data-i18n="certificates">Sertifikalar</span>
                            </a>
                        </div>
                        <div class="cmd-group" data-group="İletişim & Sosyal">
                            <div class="cmd-group-title" data-i18n="cmd_group_contact">İletişim & Sosyal</div>
                            <a href="${pathPrefix}#contact" class="cmd-item" data-keywords="iletişim contact ulaş mesaj mail e-posta">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span data-i18n="hero_btn_contact">İletişime Geç</span>
                            </a>
                            <a href="https://github.com/samet-colak" target="_blank" class="cmd-item" data-keywords="github kod kaynak repo">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                <span data-i18n="cmd_github">GitHub Profilim</span>
                            </a>
                        </div>
                        <div class="cmd-group" data-group="Görünüm & Tema">
                            <div class="cmd-group-title" data-i18n="cmd_group_theme">Görünüm & Tema</div>
                            <button type="button" id="cmd-toggle-theme" class="cmd-item" data-keywords="tema theme light dark açık koyu mod mode">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                <span data-i18n="cmd_toggle_theme">Temayı Değiştir (Açık / Koyu)</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', cmdMenuHTML);
        updateLanguage(currentLang);
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

    items.forEach(item => {
        item.addEventListener('click', () => toggleMenu(false));
    });

    const cmdThemeBtn = document.getElementById('cmd-toggle-theme');
    if (cmdThemeBtn) {
        cmdThemeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
            toggleMenu(false);
        });
    }

    const navCmdBtn = document.getElementById('nav-cmd-btn');
    if (navCmdBtn) {
        navCmdBtn.addEventListener('click', () => toggleMenu(true));
    }

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
    // İletişim sayfasındaki bento kartları bul
    const spotlightCards = document.querySelectorAll('.bento-card');
    
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

// --- FORMSPREE İLETİŞİM FORMU ENTEGRASYONU ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        if (!submitBtn) return;

        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        const originalBtnText = btnText ? btnText.textContent : 'Mesajı Gönder';
        const sendIconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
        const checkIconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        
        submitBtn.classList.add('loading');
        submitBtn.style.pointerEvents = 'none';

        // Form verilerini topla
        const formData = new FormData(this);
        const actionUrl = this.getAttribute('action');

        function handleFormResult(isSuccess) {
            submitBtn.classList.remove('loading');

            if (isSuccess) {
                contactForm.reset();
                submitBtn.classList.add('sent-success');
                if (btnText) {
                    btnText.textContent = (currentLang === 'en' ? 'Sent ✓' : 'İletildi ✓');
                }
                if (btnIcon) {
                    btnIcon.innerHTML = checkIconSvg;
                }

                setTimeout(() => {
                    submitBtn.classList.remove('sent-success');
                    if (btnText) {
                        btnText.textContent = (translations[currentLang] && translations[currentLang].form_send_btn) || originalBtnText;
                    }
                    if (btnIcon) {
                        btnIcon.innerHTML = sendIconSvg;
                    }
                    submitBtn.style.pointerEvents = 'auto';
                }, 4000);
            } else {
                submitBtn.classList.add('sent-error');
                if (btnText) {
                    btnText.textContent = (currentLang === 'en' ? 'Failed' : 'Gönderilemedi');
                }
                setTimeout(() => {
                    submitBtn.classList.remove('sent-error');
                    if (btnText) {
                        btnText.textContent = (translations[currentLang] && translations[currentLang].form_send_btn) || originalBtnText;
                    }
                    submitBtn.style.pointerEvents = 'auto';
                }, 3000);
            }
        }

        // Eğer Formspree ID henüz girilmemişse, deneme (mock) animasyonu göster
        if (!actionUrl || actionUrl.includes('YOUR_FORM_ID')) {
             setTimeout(() => {
                 handleFormResult(true);
             }, 800);
             return;
        }

        // Gerçek Formspree AJAX İsteği
        fetch(actionUrl, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                handleFormResult(true);
            } else {
                throw new Error('Gönderim hatası');
            }
        }).catch(error => {
            handleFormResult(false);
        });
    });
}

// --- E-POSTA OTOMATİK TAMAMLAMA (PREMIUM AUTOCOMPLETE) ---
const emailInput = document.getElementById('user_email');
const suggestionsList = document.getElementById('email-suggestions');

if (emailInput && suggestionsList) {
    const popularDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'yandex.com'];
    let currentFocus = -1;

    emailInput.addEventListener('input', function() {
        const val = this.value;
        suggestionsList.innerHTML = '';
        currentFocus = -1;

        if (!val || !val.includes('@')) {
            suggestionsList.classList.remove('active');
            return;
        }

        const parts = val.split('@');
        const username = parts[0];
        const domainQuery = parts[1].toLowerCase();

        const matchedDomains = popularDomains.filter(domain => domain.startsWith(domainQuery) && domain !== domainQuery);

        if (matchedDomains.length === 0 || username.length === 0) {
            suggestionsList.classList.remove('active');
            return;
        }

        matchedDomains.forEach(domain => {
            const li = document.createElement('li');
            li.className = 'email-suggestion-item';
            
            const typedPart = domain.substring(0, domainQuery.length);
            const remainingPart = domain.substring(domainQuery.length);

            li.innerHTML = `<span class="username">${username}@</span><span class="typed">${typedPart}</span><span class="domain-highlight">${remainingPart}</span>`;
            
            li.addEventListener('click', () => {
                emailInput.value = `${username}@${domain}`;
                suggestionsList.classList.remove('active');
                emailInput.focus();
            });
            
            suggestionsList.appendChild(li);
        });

        suggestionsList.classList.add('active');
    });

    emailInput.addEventListener('keydown', function(e) {
        let items = suggestionsList.getElementsByTagName('li');
        if (!suggestionsList.classList.contains('active') || items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentFocus++;
            addActive(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentFocus--;
            addActive(items);
        } else if (e.key === 'Enter') {
            if (currentFocus > -1) {
                e.preventDefault(); // Enter'a basınca formun yanlışlıkla yollanmasını engeller
                items[currentFocus].click();
            }
        }
    });

    function addActive(items) {
        removeActive(items);
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = items.length - 1;
        items[currentFocus].classList.add('selected');
    }

    function removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('selected');
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target !== emailInput && e.target !== suggestionsList) {
            suggestionsList.classList.remove('active');
        }
    });
}

// --- ÖZEL SAĞ TIK MENÜSÜ & METİN SEÇİM ARACI (ULTRA PREMIUM) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. HTML Yapılarını Enjekte Et
    const ctxHTML = `
        <div id="custom-ctx-menu" class="custom-context-menu">
            <a href="#home" class="ctx-item">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span data-i18n="ctx_home">Ana Sayfa</span>
            </a>
            <div class="ctx-divider"></div>
            <a href="#contact" class="ctx-item">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span data-i18n="ctx_contact">Bana Ulaşın</span>
            </a>
        </div>
    `;
    
    const selHTML = `
        <div id="selection-tooltip" class="selection-tooltip">
            <button id="sel-btn-copy" class="sel-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span data-i18n="sel_copy">Kopyala</span>
            </button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', ctxHTML + selHTML);
    updateLanguage(currentLang);
    
    const ctxMenu = document.getElementById('custom-ctx-menu');
    const selMenu = document.getElementById('selection-tooltip');
    
    // 2. Sağ Tık Menüsü Mantığı
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return; // Form alanlarında orijinali kalsın
        e.preventDefault();
        
        selMenu.classList.remove('active'); // Seçim aracı açıksa kapat
        let x = e.pageX;
        let y = e.pageY;
        
        if (x + 220 > window.innerWidth) x = window.innerWidth - 230; // Taşırmama kontrolü
        ctxMenu.style.left = `${x}px`;
        ctxMenu.style.top = `${y}px`;
        ctxMenu.classList.add('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-context-menu')) ctxMenu.classList.remove('active');
    });
    
    // 3. Apple Stili Metin Seçim Aracı
    const showSelectionMenu = () => {
        setTimeout(() => {
            const selection = window.getSelection();
            const text = selection.toString().trim();
            
            if (text.length > 0 && selection && selection.rangeCount > 0 && !ctxMenu.classList.contains('active')) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                
                selMenu.style.top = `${rect.top + window.scrollY - selMenu.offsetHeight - 8}px`;
                selMenu.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (selMenu.offsetWidth / 2)}px`;
                selMenu.classList.add('active');
            } else {
                selMenu.classList.remove('active');
            }
        }, 10);
    };
    
    document.addEventListener('mouseup', showSelectionMenu);
    document.addEventListener('keyup', showSelectionMenu);
    document.addEventListener('mousedown', (e) => { if(!e.target.closest('#selection-tooltip')) selMenu.classList.remove('active'); });
    
    // Buton Fonksiyonları
    const selBtnCopy = document.getElementById('sel-btn-copy');
    if (selBtnCopy) {
        selBtnCopy.addEventListener('click', () => {
            const selectedText = window.getSelection() ? window.getSelection().toString() : '';
            if (navigator.clipboard && selectedText) {
                navigator.clipboard.writeText(selectedText).catch(() => {});
            }
            const span = document.querySelector('#sel-btn-copy span');
            if (span) {
                const oldText = span.textContent;
                span.textContent = translations[currentLang]?.sel_copied || 'Kopyalandı! ✓';
                setTimeout(() => span.textContent = oldText, 2000);
            }
        });
    }
});

// --- FOOTER E-POSTA KOPYALAMA BUTONU ---
document.addEventListener('DOMContentLoaded', () => {
    const footerCopyBtn = document.getElementById('footer-copy-email');
    if (footerCopyBtn) {
        footerCopyBtn.addEventListener('click', () => {
            const email = footerCopyBtn.getAttribute('data-email') || 'smttr.cccc@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const copyTextEl = document.getElementById('footer-copy-text');
                if (copyTextEl) {
                    const original = copyTextEl.innerHTML;
                    copyTextEl.textContent = translations[currentLang]?.footer_copied_email || 'Kopyalandı! ✓';
                    footerCopyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyTextEl.innerHTML = original;
                        footerCopyBtn.classList.remove('copied');
                    }, 2200);
                }
            }).catch(err => {
                console.error('Clipboard copy error:', err);
            });
        });
    }
});
