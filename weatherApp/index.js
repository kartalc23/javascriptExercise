function displayError() {
  alert("City not found");
}

let weather = {
  apiKey: "42ee1082379be6f26421c437745ea76c",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        this.displayWeather(data);
      });
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidy").innerText = "Humidy: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    const city = document.querySelector(".search-bar").value;
    this.fetchWeather(city);
  },
};

document.querySelector(".search button").addEventListener("click", () => {
  const city = document.querySelector(".search input").value;
  weather.fetchWeather(city);
  
});

document.querySelector(".search-bar").addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const city = document.querySelector(".search input").value;
    weather.fetchWeather(city);
    document.querySelector(".search input").value = "";
  }
});

weather.fetchWeather("Turkey");
