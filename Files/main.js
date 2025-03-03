navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude
    var lon = position.coords.longitude

    console.log(lat, lon)
    // Fetch Weather data
    if ((lat >= 10 && lat <= 81) && (lon >= 26 && lon <= 169)) {

        {
            alert("Muskuraaye Ap Asia mein hain");
        }
    }
    else {
        {
            alert("Muskuraaye Ap Asia mein hain");
        }
    }
})

document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            section.classList.add("visible");
        }
    });
});

let visitorCount = localStorage.getItem("visitorCount") || 0;
visitorCount++;
localStorage.setItem("visitorCount", visitorCount);
document.getElementById("visitorCount").textContent = visitorCount;

function updateTicker() {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude.toFixed(2);
        let lon = position.coords.longitude.toFixed(2);
        document.getElementById("tickerText").textContent = `Date: ${date} | Time: ${time} | Location: Lat ${lat}, Lon ${lon}`;
    }, () => {
        document.getElementById("tickerText").textContent = `Date: ${date} | Time: ${time} | Location: Unable to retrieve`;
    });
}
updateTicker();
setInterval(updateTicker, 1000);