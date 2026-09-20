/**
 * Unified 3D Background Engine for Samet Çolak Portfolio
 * Features:
 *  - Seamless, unified 3D cyber starfield across the entire page
 *  - No distracting 3D object models (clean, elegant, distraction-free aesthetic)
 *  - Smooth 3D camera travel synchronized with page scroll
 *  - Responsive mouse parallax depth effect
 *  - HUD Waypoints indicator sync
 */

(function () {
    'use strict';

    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded. WebGL 3D scene cannot be initialized.');
        return;
    }

    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    // --- 1. SAHNE, KAMERA VE RENDERER ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b14, 0.02);

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- 2. AYDINLATMA ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00d2ff, 1.8, 60);
    cyanLight.position.set(6, 5, 6);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x3a7bd5, 2.0, 60);
    blueLight.position.set(-6, -20, 6);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0x818cf8, 1.5, 60);
    violetLight.position.set(0, -45, 6);
    scene.add(violetLight);

    // --- 3. BÜTÜN VE KESİNTİSİZ 3D YILDIZ / SİBER TOZ ALANI ---
    // Sayfanın başından en sonuna (Footer bitimine) kadar homojen, derin ve akıcı dağıtılmış parçacıklar
    const particleCount = window.innerWidth < 768 ? 1600 : 3200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    const color1 = new THREE.Color(0x00d2ff); // Cyan
    const color2 = new THREE.Color(0x3a7bd5); // Neon Blue
    const color3 = new THREE.Color(0xffffff); // Star White
    const color4 = new THREE.Color(0x38bdf8); // Sky Blue
    const color5 = new THREE.Color(0x818cf8); // Celestial Violet

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // X ekseninde geniş yayılım
        particlePositions[i3] = (Math.random() - 0.5) * 65;
        // Y ekseninde sayfanın en tepesinden (Hero) en altındaki Footer sonuna kadar kusursuz dağılım (15 ile -105)
        particlePositions[i3 + 1] = 15 - Math.random() * 120;
        // Z ekseninde kameranın önünde ve arkasında derinlik
        particlePositions[i3 + 2] = (Math.random() - 0.5) * 36;

        // Renk çeşitliliği
        const rand = Math.random();
        let selectedColor = color3;
        if (rand > 0.70) selectedColor = color1;
        else if (rand > 0.45) selectedColor = color2;
        else if (rand > 0.25) selectedColor = color4;
        else if (rand > 0.12) selectedColor = color5;

        particleColors[i3] = selectedColor.r;
        particleColors[i3 + 1] = selectedColor.g;
        particleColors[i3 + 2] = selectedColor.b;

        particleSpeeds[i] = 0.002 + Math.random() * 0.005;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Yumuşak radyal ışıldama dokusu
    const createParticleTexture = () => {
        const c = document.createElement('canvas');
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext('2d');
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.2, 'rgba(0,210,255,0.85)');
        grad.addColorStop(0.6, 'rgba(58,123,213,0.3)');
        grad.addColorStop(1, 'rgba(7,11,20,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
    };

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.16,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        map: createParticleTexture(),
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- 4. AKICI 3D SCROLL VE PARALAKS KOREOGRAFİSİ ---
    let currentScroll = 0;
    let targetScroll = 0;
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;

    function updateScrollProgress() {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        targetScroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    window.addEventListener('mousemove', (e) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // --- 5. HUD / WAYPOINT İNDİKATÖRÜ ---
    const hudPoints = document.querySelectorAll('.hud-point');
    const hudProgress = document.querySelector('.hud-line-progress');
    const sectionIds = ['home', 'about', 'projects', 'certificates', 'contact'];

    function updateHud(progress) {
        if (hudProgress) {
            hudProgress.style.height = `${progress * 100}%`;
        }

        const scrollMid = window.scrollY + window.innerHeight * 0.35;
        let activeIndex = 0;
        for (let i = 0; i < sectionIds.length; i++) {
            const el = document.getElementById(sectionIds[i]);
            if (el && scrollMid >= el.offsetTop) {
                activeIndex = i;
            }
        }

        hudPoints.forEach((point, idx) => {
            if (idx === activeIndex) {
                point.classList.add('active');
            } else {
                point.classList.remove('active');
            }
        });
    }

    // --- 6. ANİMASYON DÖNGÜSÜ ---
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Pürüzsüz Scroll Lerp
        currentScroll += (targetScroll - currentScroll) * 0.06;
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // Kamera yavaşça sayfa boyunca aşağıya doğru akar
        const targetCamY = -currentScroll * 65;
        const targetCamX = mouseX * 0.7;
        const targetCamZ = 8 + Math.sin(currentScroll * Math.PI) * 1.5;

        camera.position.y += (targetCamY - camera.position.y) * 0.08;
        camera.position.x += (targetCamX - camera.position.x) * 0.08;
        camera.position.z += (targetCamZ - camera.position.z) * 0.08;

        camera.rotation.x = -mouseY * 0.04;
        camera.rotation.y = -mouseX * 0.04;

        // Işıkların kamerayı takip etmesi (yumuşak kozmik ışıklar)
        cyanLight.position.y = camera.position.y + 5;
        blueLight.position.y = camera.position.y - 6;
        violetLight.position.y = camera.position.y - 15;

        // Parçacıkların hafif kozmik salınımı
        particles.rotation.y = elapsedTime * 0.015;
        particles.rotation.x = Math.sin(elapsedTime * 0.01) * 0.02;

        updateHud(currentScroll);

        renderer.render(scene, camera);
    }

    animate();

    // --- 7. RESIZE EVENT ---
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
})();
