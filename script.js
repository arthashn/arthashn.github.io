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

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days*24*60*60*1000);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toUTCString();
  }

  function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(cname) === 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return "";
  }


  document.getElementById("ugmButton").addEventListener("click", function() {
    window.open("https://lib.ugm.ac.id/", "_blank"); // membuka di tab baru
  });


