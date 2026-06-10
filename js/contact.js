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