document.getElementById("submit-btn").addEventListener("click",
    function submitFunction() {
        const inputValue = document.getElementById("input-box").value;
        getApi(inputValue);
    });
const getApi = region => {
    const apiKey = "4da9bb01aaa411eb3f0fe49dc49ecce6";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => display(data));
}
const display = data => {
    const country = document.getElementById("country");
    country.innerText = data?.sys?.country;
    const region = document.getElementById("region");
    region.innerText = data?.name;
    const temperature = document.getElementById("temperature");
    temperature.innerText = data?.main?.temp;
    const lead = document.getElementById("lead");
    lead.innerText = data?.weather[0]?.main;
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const weatherImg = document.getElementById("weather-status-img");
    weatherImg.setAttribute("src", url)
    console.log(data);
}