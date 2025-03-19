function updateDateTime() {
    let options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };
    let now = new Date().toLocaleString("id-ID", options);
    document.getElementById("datetime").innerHTML = now;
}

setInterval(updateDateTime, 1000); // Perbarui setiap 1 detik
updateDateTime(); // Jalankan pertama kali agar tidak kosong

document.addEventListener("DOMContentLoaded", function() {
    let line = document.getElementById("animatedLine");
    let growing = true;

    setInterval(() => {
        if (growing) {
            line.style.width = "150px";
            line.style.backgroundColor = "red";
        } else {
            line.style.width = "50px";
            line.style.backgroundColor = "blue";
        }
        growing = !growing;
    }, 1000);
});

document.getElementById("ugmButton").addEventListener("click", function() {
    window.open("https://lib.ugm.ac.id/", "_blank");
});
