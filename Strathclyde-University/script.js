// Variable
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// Get the tab section that displays the weather

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Get the tab element clicked
    const target = document.querySelector(tab.dataset.tabTarget);

    if (target.id === "current-weather") displayWeather();

    // Make all the tabs sections disappear
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    // Make all tabs item inactive
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Make selected tab section appear
    tab.classList.add("active");

    // Make selected tab item active
    target.classList.add("active");
  });
});

//
const displayWeather = () => {
  // Cors policy issue
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Glasgow&units=metric&APPID=65e503e76e92014dd7d82f5474a21527",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
