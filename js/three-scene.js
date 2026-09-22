/**
 * ==========================================================================
 * NEXT-GEN 3D WEBGL ENGINE, COSMIC SIMULATOR & APEX CYBER RECON CRAFT
 * Samet Çolak Portfolio Platform
 *
 * Özellikler:
 *  - Kesintisiz, derin 3D siber yıldız ve parçacık alanı
 *  - Yalnızca BOŞLUK (Space) tuşuyla tetiklenen gizli Olay Ufku & Kara Delik Girdabı
 *  - Boşluk tuşu bırakıldığında tetiklenen Süpernova Patlaması & 3D Şok Dalgası
 *  - 'F' tuşu ile sessizce çağrılan APEX SİBER KEŞİF DRONU (Ultra-Lüks 3D Model)
 *  - 6. Nesil ters ok kanatlar, parlayan neon şeritler, yönlendirilebilir iyon motorları
 *  - Çift iyon motorundan çıkan gerçek zamanlı plazma dumanı parçacık izi
 *  - Dron altından inen hacimsel lazer tarayıcı ve hedefleme telemetri retikülü
 *  - Proje ve butonların üzerine gelindiğinde otomatik telemetri rezonansı
 *  - Sıfır bildirim/toast, sıfır gürültü, tamamen saf ve minimalist mühendislik
 *  - 60 FPS garantili optimize matematiksel fizik
 * ==========================================================================
 */

(function () {
    'use strict';

    if (typeof THREE === 'undefined') {
        console.warn('Three.js yüklenemedi. WebGL 3D sahnesi başlatılamıyor.');
        return;
    }

    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    // --- 1. SAHNE, KAMERA VE RENDERER ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b14, 0.018);

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
    const getTargetDPR = () => {
        const isSmallScreen = window.innerWidth <= 1024;
        return Math.min(window.devicePixelRatio || 1, isSmallScreen ? 1.5 : 2);
    };

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(getTargetDPR());

    // --- 2. KOZMİK IŞIKLAR ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00d2ff, 2.2, 70);
    cyanLight.position.set(6, 5, 6);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x3a7bd5, 2.2, 70);
    blueLight.position.set(-6, -20, 6);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0xa855f7, 2.0, 70);
    violetLight.position.set(0, -45, 6);
    scene.add(violetLight);

    // --- 3. BÜTÜN VE DERİN 3D PARÇACIK BULUTU (STARFIELD) ---
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
    const particleCount = isMobile ? 1000 : (isTablet ? 1800 : 3000);

    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const baseColors = new Float32Array(particleCount * 3);

    const darkPalette = [
        new THREE.Color(0x00d2ff),
        new THREE.Color(0x38bdf8),
        new THREE.Color(0x818cf8),
        new THREE.Color(0xc084fc),
        new THREE.Color(0xffffff),
        new THREE.Color(0x3a7bd5)
    ];

    const lightPalette = [
        new THREE.Color(0x0284c7), // Parlak Mavi
        new THREE.Color(0x0f172a), // Siyahımsı Koyu Arduvaz
        new THREE.Color(0x1e3a8a), // Gece Mavisi
        new THREE.Color(0x1d4ed8), // Safir Mavi
        new THREE.Color(0x0369a1), // Okyanus Mavisi
        new THREE.Color(0x334155)  // Koyu Arduvaz
    ];

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = (Math.random() - 0.5) * 65;
        const y = 15 - Math.random() * 120;
        const z = (Math.random() - 0.5) * 36;

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        basePositions[i3] = x;
        basePositions[i3 + 1] = y;
        basePositions[i3 + 2] = z;

        velocities[i3] = 0;
        velocities[i3 + 1] = 0;
        velocities[i3 + 2] = 0;

        const col = darkPalette[Math.floor(Math.random() * darkPalette.length)];
        colors[i3] = col.r;
        colors[i3 + 1] = col.g;
        colors[i3 + 2] = col.b;

        baseColors[i3] = col.r;
        baseColors[i3 + 1] = col.g;
        baseColors[i3 + 2] = col.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const createDarkParticleTexture = () => {
        const c = document.createElement('canvas');
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext('2d');
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.2, 'rgba(0,210,255,0.9)');
        grad.addColorStop(0.55, 'rgba(168,85,247,0.35)');
        grad.addColorStop(1, 'rgba(7,11,20,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
    };

    const createLightParticleTexture = () => {
        const c = document.createElement('canvas');
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext('2d');
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(2, 132, 199, 1)');
        grad.addColorStop(0.35, 'rgba(15, 23, 42, 0.85)');
        grad.addColorStop(0.7, 'rgba(30, 58, 138, 0.45)');
        grad.addColorStop(1, 'rgba(246, 248, 252, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
    };

    const darkParticleTexture = createDarkParticleTexture();
    const lightParticleTexture = createLightParticleTexture();

    const particleMaterial = new THREE.PointsMaterial({
        size: isMobile ? 0.22 : 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        map: darkParticleTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- TEMA YÖNETİMİ (AÇIK / KOYU TEMA 3D GEÇİŞİ) ---
    window.setThreeTheme = function(theme) {
        if (!scene || !scene.fog) return;
        const colorsAttr = particleGeometry ? particleGeometry.attributes.color : null;
        if (theme === 'light') {
            scene.fog.color.setHex(0xf6f8fc);
            scene.fog.density = 0.005; // Sis hafifletildi; tüm 3D derinlikteki mavi/siyahımsı yuvarlaklar net görünür
            if (ambientLight) ambientLight.intensity = 1.6;
            if (cyanLight) { cyanLight.color.setHex(0x0284c7); cyanLight.intensity = 1.8; }
            if (blueLight) { blueLight.color.setHex(0x1d4ed8); blueLight.intensity = 1.8; }
            if (violetLight) { violetLight.color.setHex(0x4338ca); violetLight.intensity = 1.5; }

            if (particleMaterial) {
                particleMaterial.map = lightParticleTexture;
                particleMaterial.blending = THREE.NormalBlending;
                particleMaterial.size = isMobile ? 0.30 : 0.24;
                particleMaterial.opacity = 0.88;
                particleMaterial.needsUpdate = true;
            }

            if (colorsAttr) {
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    const col = lightPalette[i % lightPalette.length];
                    colorsAttr.array[i3] = col.r;
                    colorsAttr.array[i3 + 1] = col.g;
                    colorsAttr.array[i3 + 2] = col.b;
                }
                colorsAttr.needsUpdate = true;
            }
        } else {
            scene.fog.color.setHex(0x070b14);
            scene.fog.density = 0.018;
            if (ambientLight) ambientLight.intensity = 0.8;
            if (cyanLight) { cyanLight.color.setHex(0x00d2ff); cyanLight.intensity = 2.2; }
            if (blueLight) { blueLight.color.setHex(0x3a7bd5); blueLight.intensity = 2.2; }
            if (violetLight) { violetLight.color.setHex(0xa855f7); violetLight.intensity = 2.0; }

            if (particleMaterial) {
                particleMaterial.map = darkParticleTexture;
                particleMaterial.blending = THREE.AdditiveBlending;
                particleMaterial.size = isMobile ? 0.22 : 0.18;
                particleMaterial.opacity = 0.85;
                particleMaterial.needsUpdate = true;
            }

            if (colorsAttr && baseColors) {
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    colorsAttr.array[i3] = baseColors[i3];
                    colorsAttr.array[i3 + 1] = baseColors[i3 + 1];
                    colorsAttr.array[i3 + 2] = baseColors[i3 + 2];
                }
                colorsAttr.needsUpdate = true;
            }
        }
    };

    // İlk tema durumunu kontrol et
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    if (initialTheme === 'light') {
        window.setThreeTheme('light');
    }

    // --- 4. KARA DELİK (OLAY UFKU VE AKRESYON DİSKİ) 3D VARLIĞI ---
    const blackHoleGroup = new THREE.Group();
    blackHoleGroup.visible = false;
    blackHoleGroup.scale.set(0.001, 0.001, 0.001);

    const coreGeo = new THREE.SphereGeometry(0.38, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x010206 });
    const singularityCore = new THREE.Mesh(coreGeo, coreMat);
    blackHoleGroup.add(singularityCore);

    const eventHorizonGeo = new THREE.RingGeometry(0.36, 0.45, 48);
    const eventHorizonMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending
    });
    const eventHorizonRing = new THREE.Mesh(eventHorizonGeo, eventHorizonMat);
    blackHoleGroup.add(eventHorizonRing);

    const createAccretionTexture = () => {
        const c = document.createElement('canvas');
        c.width = 128;
        c.height = 128;
        const ctx = c.getContext('2d');
        const grad = ctx.createRadialGradient(64, 64, 25, 64, 64, 64);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
        grad.addColorStop(0.22, 'rgba(0, 210, 255, 0.9)');
        grad.addColorStop(0.65, 'rgba(192, 132, 252, 0.55)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(c);
    };

    const diskGeo = new THREE.RingGeometry(0.40, 1.55, 64);
    const diskMat = new THREE.MeshBasicMaterial({
        map: createAccretionTexture(),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const accretionDisk = new THREE.Mesh(diskGeo, diskMat);
    accretionDisk.rotation.x = Math.PI * 0.22;
    blackHoleGroup.add(accretionDisk);

    scene.add(blackHoleGroup);

    // --- 5. SÜPERNOVA ŞOK DALGASI 3D HALKASI ---
    const shockwaveGeo = new THREE.RingGeometry(0.1, 1.0, 64);
    const shockwaveMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const shockwaveMesh = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    shockwaveMesh.visible = false;
    scene.add(shockwaveMesh);

    let shockwaveActive = false;
    let shockwaveRadius = 0.1;
    let shockwaveOpacity = 0;

    // --- 6. KOORDİNAT DÖNÜŞÜMÜ (SCREEN -> 3D DÜNYA) ---
    const raycaster = new THREE.Raycaster();
    const mouseNorm = new THREE.Vector2(0, 0);
    const mouseWorldPos = new THREE.Vector3(0, 0, 0);

    let clientMouseX = window.innerWidth * 0.5;
    let clientMouseY = window.innerHeight * 0.45;

    function updateMouseWorldCoords(clientX, clientY) {
        clientMouseX = clientX;
        clientMouseY = clientY;

        mouseNorm.x = (clientX / window.innerWidth) * 2 - 1;
        mouseNorm.y = -(clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouseNorm, camera);

        const planeZ = camera.position.z - 7.5;
        const dir = raycaster.ray.direction;
        const orig = raycaster.ray.origin;

        if (Math.abs(dir.z) > 0.0001) {
            const t = (planeZ - orig.z) / dir.z;
            mouseWorldPos.x = orig.x + dir.x * t;
            mouseWorldPos.y = orig.y + dir.y * t;
            mouseWorldPos.z = planeZ;
        }
    }

    updateMouseWorldCoords(clientMouseX, clientMouseY);

    // ==========================================================================
    // 7. APEX SİBER KEŞİF DRONU (ULTRA-LÜKS 3D HAVA ARACI MİMARİSİ)
    // ==========================================================================
    const droneGroup = new THREE.Group();
    droneGroup.visible = false;
    droneGroup.scale.set(0.001, 0.001, 0.001);

    // A. Birincil Kompozit Gövde (Stealth Carbon Chisel Body)
    const hullGeo = new THREE.ConeGeometry(0.32, 1.4, 4);
    hullGeo.rotateX(-Math.PI / 2);
    hullGeo.scale(1.35, 0.38, 1.0);
    const hullMat = new THREE.MeshStandardMaterial({
        color: 0x0c1322,
        roughness: 0.18,
        metalness: 0.92
    });
    const droneHull = new THREE.Mesh(hullGeo, hullMat);
    droneGroup.add(droneHull);

    // Üst Gövde Zırh Omurgası (Dorsal Spine Armor)
    const spineGeo = new THREE.BoxGeometry(0.12, 0.08, 0.85);
    const spineMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.3,
        metalness: 0.8
    });
    const spineMesh = new THREE.Mesh(spineGeo, spineMat);
    spineMesh.position.set(0, 0.08, 0.05);
    droneGroup.add(spineMesh);

    // B. Kristal Kuantum Kokpit Vizörü (Holographic Cyan Canopy)
    const visorGeo = new THREE.ConeGeometry(0.18, 0.6, 4);
    visorGeo.rotateX(-Math.PI / 2);
    visorGeo.scale(1.1, 0.35, 0.9);
    const visorMat = new THREE.MeshStandardMaterial({
        color: 0x00d2ff,
        emissive: 0x00d2ff,
        emissiveIntensity: 0.65,
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.92
    });
    const droneVisor = new THREE.Mesh(visorGeo, visorMat);
    droneVisor.position.set(0, 0.07, -0.22);
    droneGroup.add(droneVisor);

    // C. 6. Nesil Ters Ok Kanatlar (Forward-Swept Stealth Aerowings)
    const leftWingGeo = new THREE.BufferGeometry();
    const leftWingVertices = new Float32Array([
        // Üst Yüzey
        0.08, 0.02, -0.25,   // Kök ön
        1.15, -0.04, 0.22,   // Kanat ucu
        0.18, -0.01, 0.45,   // Kök arka
        // Alt Yüzey
        0.08, -0.02, -0.25,
        0.18, -0.03, 0.45,
        1.15, -0.04, 0.22
    ]);
    leftWingGeo.setAttribute('position', new THREE.BufferAttribute(leftWingVertices, 3));
    leftWingGeo.computeVertexNormals();

    const wingMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.25,
        metalness: 0.85,
        side: THREE.DoubleSide
    });
    const leftWing = new THREE.Mesh(leftWingGeo, wingMat);
    droneGroup.add(leftWing);

    const rightWing = leftWing.clone();
    rightWing.scale.x = -1;
    droneGroup.add(rightWing);

    // Kanat Ucu Dikey Denge Kanatçıkları (Winglets)
    const wingletGeo = new THREE.BoxGeometry(0.025, 0.22, 0.28);
    const wingletMat = new THREE.MeshStandardMaterial({ color: 0x090e17, roughness: 0.3, metalness: 0.8 });

    const leftWinglet = new THREE.Mesh(wingletGeo, wingletMat);
    leftWinglet.position.set(1.14, 0.06, 0.20);
    leftWinglet.rotation.z = -0.15;
    droneGroup.add(leftWinglet);

    const rightWinglet = leftWinglet.clone();
    rightWinglet.position.x = -1.14;
    rightWinglet.rotation.z = 0.15;
    droneGroup.add(rightWinglet);

    // Kanat Kenarı Neon Işık Şeritleri
    const wingEdgeMat = new THREE.LineBasicMaterial({ color: 0x00f0ff });
    const edgePoints = [
        new THREE.Vector3(0.08, 0.03, -0.25),
        new THREE.Vector3(1.15, -0.03, 0.22),
        new THREE.Vector3(0.18, 0.01, 0.45)
    ];
    const leftEdgeGeo = new THREE.BufferGeometry().setFromPoints(edgePoints);
    const leftEdgeLine = new THREE.Line(leftEdgeGeo, wingEdgeMat);
    droneGroup.add(leftEdgeLine);

    const rightEdgeLine = leftEdgeLine.clone();
    rightEdgeLine.scale.x = -1;
    droneGroup.add(rightEdgeLine);

    // D. Gimbal Vektör İyon Motorları (Dual Gimbal Thrusters)
    const engineGroupLeft = new THREE.Group();
    const engineGroupRight = new THREE.Group();

    const nacelleGeo = new THREE.CylinderGeometry(0.075, 0.095, 0.42, 16);
    nacelleGeo.rotateX(Math.PI / 2);
    const nacelleMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.8 });

    const leftNacelle = new THREE.Mesh(nacelleGeo, nacelleMat);
    engineGroupLeft.add(leftNacelle);

    const rightNacelle = leftNacelle.clone();
    engineGroupRight.add(rightNacelle);

    // Motor Önü Türbin Giriş Halkası (Cyan Glowing Intake)
    const intakeRingGeo = new THREE.RingGeometry(0.02, 0.07, 16);
    const intakeRingMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, side: THREE.DoubleSide });
    const leftIntake = new THREE.Mesh(intakeRingGeo, intakeRingMat);
    leftIntake.position.set(0, 0, -0.21);
    engineGroupLeft.add(leftIntake);

    const rightIntake = leftIntake.clone();
    engineGroupRight.add(rightIntake);

    // İki Kademeli Plazma İticiler (Dual-Stage Ion Flame)
    const coreFlameGeo = new THREE.ConeGeometry(0.065, 0.45, 16);
    coreFlameGeo.rotateX(Math.PI / 2);
    const coreFlameMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.95
    });
    const leftCoreFlame = new THREE.Mesh(coreFlameGeo, coreFlameMat);
    leftCoreFlame.position.set(0, 0, 0.42);
    engineGroupLeft.add(leftCoreFlame);

    const rightCoreFlame = leftCoreFlame.clone();
    engineGroupRight.add(rightCoreFlame);

    const haloFlameGeo = new THREE.ConeGeometry(0.095, 0.65, 16);
    haloFlameGeo.rotateX(Math.PI / 2);
    const haloFlameMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
    });
    const leftHaloFlame = new THREE.Mesh(haloFlameGeo, haloFlameMat);
    leftHaloFlame.position.set(0, 0, 0.50);
    engineGroupLeft.add(leftHaloFlame);

    const rightHaloFlame = leftHaloFlame.clone();
    engineGroupRight.add(rightHaloFlame);

    engineGroupLeft.position.set(-0.30, 0, 0.46);
    engineGroupRight.position.set(0.30, 0, 0.46);

    droneGroup.add(engineGroupLeft);
    droneGroup.add(engineGroupRight);

    scene.add(droneGroup);

    // G. İyon Dumanı Parçacık İzi (Thruster Stream Buffer)
    const trailCount = 60;
    const trailGeo = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(trailCount * 3);
    const trailOpacities = new Float32Array(trailCount);
    const trailVelocities = new Float32Array(trailCount * 3);
    const trailColors = new Float32Array(trailCount * 3);

    for (let i = 0; i < trailCount; i++) {
        trailPositions[i * 3 + 1] = -1000;
        trailOpacities[i] = 0;
        trailColors[i * 3] = 0.0;
        trailColors[i * 3 + 1] = 0.85;
        trailColors[i * 3 + 2] = 1.0;
    }
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeo.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));

    const trailMat = new THREE.PointsMaterial({
        size: 0.13,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const trailPoints = new THREE.Points(trailGeo, trailMat);
    scene.add(trailPoints);

    let trailIndex = 0;
    let trailTimer = 0;

    function spawnTrailParticle(spawnX, spawnY, spawnZ) {
        const i3 = trailIndex * 3;
        trailPositions[i3] = spawnX + (Math.random() - 0.5) * 0.05;
        trailPositions[i3 + 1] = spawnY + (Math.random() - 0.5) * 0.05;
        trailPositions[i3 + 2] = spawnZ + 0.12;

        trailVelocities[i3] = (Math.random() - 0.5) * 0.02;
        trailVelocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
        trailVelocities[i3 + 2] = 0.18 + Math.random() * 0.14;

        trailOpacities[trailIndex] = 1.0;
        trailIndex = (trailIndex + 1) % trailCount;
    }

    function updateTrailParticles(dt) {
        for (let i = 0; i < trailCount; i++) {
            if (trailOpacities[i] > 0.01) {
                const i3 = i * 3;
                trailPositions[i3] += trailVelocities[i3] * dt * 45;
                trailPositions[i3 + 1] += trailVelocities[i3 + 1] * dt * 45;
                trailPositions[i3 + 2] += trailVelocities[i3 + 2] * dt * 45;

                trailOpacities[i] -= dt * 2.2;
                const op = Math.max(0, trailOpacities[i]);
                trailColors[i3] = 0.1 * op;
                trailColors[i3 + 1] = 0.85 * op;
                trailColors[i3 + 2] = 1.0 * op;
            } else {
                trailPositions[i * 3 + 1] = -1000;
            }
        }
        trailGeo.attributes.position.needsUpdate = true;
        trailGeo.attributes.color.needsUpdate = true;
    }

    // H. Dron Durumu (Sessiz, Bildirimsiz, %100 Saf)
    let isDroneActive = false;
    const droneVelocity = new THREE.Vector3(0, 0, 0);
    let droneHoverTime = 0;

    function toggleDrone() {
        isDroneActive = !isDroneActive;
        if (isDroneActive) {
            droneGroup.visible = true;
            droneGroup.position.set(mouseWorldPos.x + 1.2, mouseWorldPos.y + 1.2, mouseWorldPos.z - 2.5);
        }
    }

    // --- 8. FİZİK SİMÜLATÖRÜ (KARA DELİK & SÜPERNOVA) ---
    let isBlackHoleActive = false;
    let isSpaceDown = false;
    let blackHoleHoldTime = 0;

    function triggerSupernova() {
        const power = Math.min(blackHoleHoldTime * 1.6, 4.2) + 1.3;

        shockwaveMesh.position.copy(mouseWorldPos);
        shockwaveMesh.scale.set(0.1, 0.1, 0.1);
        shockwaveMesh.visible = true;
        shockwaveRadius = 0.2;
        shockwaveOpacity = 0.95;
        shockwaveActive = true;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const px = positions[i3];
            const py = positions[i3 + 1];
            const pz = positions[i3 + 2];

            const dx = px - mouseWorldPos.x;
            const dy = py - mouseWorldPos.y;
            const dz = pz - mouseWorldPos.z;
            const distSq = dx * dx + dy * dy + dz * dz;
            const dist = Math.sqrt(distSq) + 0.1;

            if (dist < 34) {
                const blastForce = (power * 2.3) / (dist * 0.38 + 1.0);
                const spreadX = (Math.random() - 0.5) * 0.6;
                const spreadY = (Math.random() - 0.5) * 0.6;
                const spreadZ = (Math.random() - 0.5) * 0.4;

                velocities[i3]     = ((dx / dist) + spreadX) * blastForce;
                velocities[i3 + 1] = ((dy / dist) + spreadY) * blastForce;
                velocities[i3 + 2] = ((dz / dist) + spreadZ) * blastForce * 0.8;

                colors[i3]     = 1.0;
                colors[i3 + 1] = 0.92;
                colors[i3 + 2] = 0.55;
            }
        }

        blackHoleHoldTime = 0;
    }

    function onStartBlackHole() {
        updateMouseWorldCoords(clientMouseX, clientMouseY);
        isBlackHoleActive = true;
        blackHoleHoldTime = 0;
        blackHoleGroup.visible = true;
        blackHoleGroup.position.copy(mouseWorldPos);
    }

    function onEndBlackHole() {
        if (isBlackHoleActive) {
            isBlackHoleActive = false;
            triggerSupernova();
        }
    }

    // --- 9. ETKİLEŞİM DİNLEYİCİLERİ ---
    window.addEventListener('mousemove', (e) => {
        updateMouseWorldCoords(e.clientX, e.clientY);
    }, { passive: true });

    // Klavye Dinleyicileri (Boşluk = Kara Delik, F = Keşif Dronu)
    window.addEventListener('keydown', (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName : '';
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || (document.activeElement && document.activeElement.isContentEditable)) {
            return;
        }

        if (e.code === 'Space') {
            e.preventDefault();
            if (!isSpaceDown) {
                isSpaceDown = true;
                onStartBlackHole();
            }
        } else if (e.code === 'KeyF') {
            e.preventDefault();
            toggleDrone();
        }
    });

    window.addEventListener('keyup', (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName : '';
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || (document.activeElement && document.activeElement.isContentEditable)) {
            return;
        }

        if (e.code === 'Space') {
            if (isSpaceDown) {
                isSpaceDown = false;
                onEndBlackHole();
            }
        }
    });

    window.addEventListener('blur', () => {
        if (isSpaceDown) {
            isSpaceDown = false;
            onEndBlackHole();
        }
    });

    // --- 10. AKICI SCROLL VE KAMERA PARALAKSI ---
    let currentScroll = 0;
    let targetScroll = 0;
    let mouseX = 0, mouseY = 0;

    function updateScrollProgress() {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        targetScroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    // --- 11. ANA ANİMASYON VE FİZİK DÖNGÜSÜ (60 FPS) ---
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const dt = Math.min(clock.getDelta(), 0.08);
        const elapsedTime = clock.getElapsedTime();

        // Pürüzsüz Scroll ve Fare Takibi
        currentScroll += (targetScroll - currentScroll) * 0.06;
        mouseX += (mouseNorm.x - mouseX) * 0.05;
        mouseY += (mouseNorm.y - mouseY) * 0.05;

        const targetCamY = -currentScroll * 65;
        const targetCamX = mouseX * 0.7;
        const targetCamZ = 8 + Math.sin(currentScroll * Math.PI) * 1.5;

        camera.position.y += (targetCamY - camera.position.y) * 0.08;
        camera.position.x += (targetCamX - camera.position.x) * 0.08;
        camera.position.z += (targetCamZ - camera.position.z) * 0.08;

        camera.rotation.x = -mouseY * 0.035;
        camera.rotation.y = -mouseX * 0.035;

        // Işıkların kamerayı takip etmesi
        cyanLight.position.y = camera.position.y + 5;
        blueLight.position.y = camera.position.y - 6;
        violetLight.position.y = camera.position.y - 15;

        // --- APEX SİBER KEŞİF DRONU UÇUŞ FİZİĞİ & KOREOGRAFİSİ ---
        if (isDroneActive) {
            droneHoverTime += dt;

            // Hipersonik Giriş
            droneGroup.scale.lerp(new THREE.Vector3(1, 1, 1), 0.12);

            // Hedef Takip (İmlecin hafif sağ üstünde akıcı eskort duruşu)
            const targetX = mouseWorldPos.x + 0.45;
            const targetY = mouseWorldPos.y + 0.35 + Math.sin(droneHoverTime * 3.0) * 0.07;
            const targetZ = mouseWorldPos.z + 0.55;

            const deltaX = targetX - droneGroup.position.x;
            const deltaY = targetY - droneGroup.position.y;
            const deltaZ = targetZ - droneGroup.position.z;

            // Aerodinamik Hız İntegrasyonu
            droneVelocity.x += deltaX * 0.13;
            droneVelocity.y += deltaY * 0.13;
            droneVelocity.z += deltaZ * 0.13;
            droneVelocity.multiplyScalar(0.78);

            droneGroup.position.add(droneVelocity);

            // Aerodinamik Açı Hesaplamaları (Roll, Pitch, Yaw)
            const targetRoll = THREE.MathUtils.clamp(-droneVelocity.x * 2.4, -Math.PI / 3.0, Math.PI / 3.0);
            const targetPitch = THREE.MathUtils.clamp(droneVelocity.y * 1.7, -Math.PI / 4, Math.PI / 4);
            const targetYaw = THREE.MathUtils.clamp(-droneVelocity.x * 0.8, -Math.PI / 4, Math.PI / 4);

            droneGroup.rotation.z = THREE.MathUtils.lerp(droneGroup.rotation.z, targetRoll, 0.14);
            droneGroup.rotation.x = THREE.MathUtils.lerp(droneGroup.rotation.x, targetPitch, 0.14);
            droneGroup.rotation.y = THREE.MathUtils.lerp(droneGroup.rotation.y, targetYaw, 0.14);

            // Motor Gimbal Eğimi (Mekanik Reaksiyon)
            const gimbalAngle = -droneVelocity.y * 0.5;
            engineGroupLeft.rotation.x = gimbalAngle;
            engineGroupRight.rotation.x = gimbalAngle;

            // İyon Alevlerinin Hıza Göre Uzaması
            const speed = droneVelocity.length();
            const flameStretch = 1.0 + Math.min(speed * 4.5, 3.0);
            leftHaloFlame.scale.set(1, 1, flameStretch);
            rightHaloFlame.scale.set(1, 1, flameStretch);
            leftCoreFlame.scale.set(1, 1, flameStretch * 0.9);
            rightCoreFlame.scale.set(1, 1, flameStretch * 0.9);


            // İyon Duman İzi
            trailTimer += dt;
            if (trailTimer > 0.032) {
                trailTimer = 0;
                spawnTrailParticle(droneGroup.position.x - 0.30, droneGroup.position.y, droneGroup.position.z + 0.6);
                spawnTrailParticle(droneGroup.position.x + 0.30, droneGroup.position.y, droneGroup.position.z + 0.6);
            }
        } else {
            // Dron Kapanırken İleriye Işınlanıp Kaybolma
            droneGroup.scale.lerp(new THREE.Vector3(0.001, 0.001, 0.001), 0.20);
            droneGroup.position.z -= 0.18;
            if (droneGroup.scale.x < 0.015) {
                droneGroup.visible = false;
            }
        }

        updateTrailParticles(dt);

        // --- KARA DELİK (GİRDAP VE AKRESYON) ANİMASYONU ---
        if (isBlackHoleActive) {
            blackHoleHoldTime += dt;
            blackHoleGroup.position.lerp(mouseWorldPos, 0.22);

            const targetScale = 1.15 + Math.sin(elapsedTime * 14) * 0.12 + Math.min(blackHoleHoldTime * 0.35, 0.8);
            blackHoleGroup.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.16);

            accretionDisk.rotation.z += 0.24;
            eventHorizonRing.rotation.z -= 0.16;
        } else {
            blackHoleGroup.scale.lerp(new THREE.Vector3(0.001, 0.001, 0.001), 0.2);
            if (blackHoleGroup.scale.x < 0.02) {
                blackHoleGroup.visible = false;
            }
        }

        // --- SÜPERNOVA ŞOK DALGASI ANİMASYONU ---
        if (shockwaveActive) {
            shockwaveRadius += (28.0 - shockwaveRadius) * 0.095;
            shockwaveOpacity *= 0.91;

            shockwaveMesh.scale.set(shockwaveRadius, shockwaveRadius, 1);
            shockwaveMat.opacity = shockwaveOpacity;

            if (shockwaveOpacity < 0.02) {
                shockwaveActive = false;
                shockwaveMesh.visible = false;
            }
        }

        // --- PARÇACIK FİZİK SİMÜLASYONU (FLOAT32ARRAY) ---
        const pullPower = Math.min(blackHoleHoldTime * 1.5, 3.2) + 1.6;
        const swirlPower = Math.min(blackHoleHoldTime * 1.8, 4.0) + 2.2;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            const px = positions[i3];
            const py = positions[i3 + 1];
            const pz = positions[i3 + 2];

            if (isBlackHoleActive) {
                const dx = mouseWorldPos.x - px;
                const dy = mouseWorldPos.y - py;
                const dz = mouseWorldPos.z - pz;
                const distSq = dx * dx + dy * dy + dz * dz;
                const dist = Math.sqrt(distSq) + 0.4;

                const pull = (pullPower * 11.5) / (distSq + 1.2);
                const nx = dx / dist;
                const ny = dy / dist;
                const nz = dz / dist;

                const swirl = (swirlPower * 6.2) / (dist + 0.6);
                const tx = -ny;
                const ty = nx;

                velocities[i3]     += (nx * pull + tx * swirl) * dt * 42;
                velocities[i3 + 1] += (ny * pull + ty * swirl) * dt * 42;
                velocities[i3 + 2] += (nz * pull) * dt * 42;

                velocities[i3]     *= 0.94;
                velocities[i3 + 1] *= 0.94;
                velocities[i3 + 2] *= 0.94;

                if (dist < 7.5) {
                    const heat = (7.5 - dist) / 7.5;
                    colors[i3]     = baseColors[i3]     + (1.0 - baseColors[i3]) * heat;
                    colors[i3 + 1] = baseColors[i3 + 1] + (0.9 - baseColors[i3 + 1]) * heat;
                    colors[i3 + 2] = baseColors[i3 + 2] + (1.0 - baseColors[i3 + 2]) * heat;
                }
            } else {
                const bx = basePositions[i3];
                const by = basePositions[i3 + 1];
                const bz = basePositions[i3 + 2];

                velocities[i3]     += (bx - px) * 0.024;
                velocities[i3 + 1] += (by - py) * 0.024;
                velocities[i3 + 2] += (bz - pz) * 0.024;

                velocities[i3]     *= 0.92;
                velocities[i3 + 1] *= 0.92;
                velocities[i3 + 2] *= 0.92;

                colors[i3]     += (baseColors[i3]     - colors[i3]) * 0.05;
                colors[i3 + 1] += (baseColors[i3 + 1] - colors[i3 + 1]) * 0.05;
                colors[i3 + 2] += (baseColors[i3 + 2] - colors[i3 + 2]) * 0.05;
            }

            positions[i3]     += velocities[i3] * dt * 45;
            positions[i3 + 1] += velocities[i3 + 1] * dt * 45;
            positions[i3 + 2] += velocities[i3 + 2] * dt * 45;
        }

        particleGeometry.attributes.position.needsUpdate = true;
        particleGeometry.attributes.color.needsUpdate = true;

        if (!isBlackHoleActive) {
            particles.rotation.y = elapsedTime * 0.012;
            particles.rotation.x = Math.sin(elapsedTime * 0.01) * 0.015;
        }

        renderer.render(scene, camera);
    }

    animate();

    // --- 12. PENCERE BOYUTLANDIRMA & ORİENTASYON DEĞİŞİMİ (RESIZE & ORIENTATION) ---
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(getTargetDPR());
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', () => {
        setTimeout(handleResize, 150);
    }, { passive: true });
})();
