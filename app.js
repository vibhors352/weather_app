console.log("dsjjddkj");
const btn = document.querySelector("#getweather");
const form = document.getElementById("form");
btn.addEventListener("click", display);
function display() {
  event.preventDefault();
  const city = document.getElementById("city").value;
  // const country = document.getElementById("country").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json.weather[0].description);
      const display = document.getElementById("displaydata");
      const currData = document.querySelectorAll(".info");
      currData.forEach((info) => display.removeChild(info));
      const tempdiv = document.createElement("div");
      tempdiv.textContent = Math.floor(json.main.temp - 273) + "°C";
      tempdiv.classList.add("temp");
      const info = document.createElement("div");
      const humidity = document.createElement("div");
      humidity.textContent = json.main.humidity + "% humidity";
      humidity.classList.add("humidity");
      const wind = document.createElement("div");
      wind.textContent = json.wind.speed + " km/h wind speed";
      wind.classList.add("wind");
      const general = document.createElement("div");
      general.textContent = json.weather[0].description;
      general.classList.add("general");
      const name = document.createElement("div");
      name.textContent = json.name;
      name.classList.add("name");
      info.classList.add("info");
      info.appendChild(name);
      info.appendChild(general);
      info.appendChild(tempdiv);
      info.appendChild(humidity);
      info.appendChild(wind);
      display.appendChild(info);
      // console.log(json.main.temp - 273);
    });
  form.reset();
}
