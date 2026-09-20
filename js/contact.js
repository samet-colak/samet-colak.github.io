// --- CANLI SAAT (LIVE TIME) YÖNETİMİ ---
function updateClock() {
    const timeElements = [
        document.getElementById('live-time'),
        document.getElementById('footer-live-time')
    ];
    const now = new Date();
    const options = { 
        timeZone: 'Europe/Istanbul', 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const timeStr = now.toLocaleTimeString('tr-TR', options);
    timeElements.forEach(el => {
        if (el) el.textContent = timeStr;
    });
}
setInterval(updateClock, 1000);
updateClock(); // İlk yüklemede beklememek için hemen çalıştır