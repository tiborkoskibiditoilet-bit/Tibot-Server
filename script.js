// Funkcia na kopírovanie IP
function copyIP() {
    const ip = document.getElementById('ip-address').innerText;
    navigator.clipboard.writeText(ip);
    alert("IP adresa bola skopírovaná: " + ip);
}

// Načítanie stavu servera (nahraď IP adresu tvojou)
const serverIP = "play.hypixel.net"; // Tu daj tvoju IP

function updateStatus() {
    $.getJSON(`https://api.mcsrvstat.us/2/${serverIP}`, function(data) {
        if (data.online) {
            $('#player-count').text(data.players.online + " / " + data.players.max);
        } else {
            $('#player-count').text("Server je offline");
        }
    });
}

updateStatus();