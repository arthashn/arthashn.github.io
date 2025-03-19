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

    function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        let dateTimeElement = document.getElementById("datetime");
        if (dateTimeElement) {
            dateTimeElement.textContent = now.toLocaleDateString('id-ID', options);
        }
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});
