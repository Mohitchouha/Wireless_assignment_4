
document.getElementById("date").textContent = new Date();


document.getElementById("randomNum").textContent = Math.random();

fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
.then(response => response.json())
.then(data => {
    document.getElementById("weather").textContent = `Weather: ${data.weather[0].description}`;
});
