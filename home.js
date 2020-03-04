
const initialLoading = () =>{
    loadquote()
    getWeather()
}


const loadquote = () =>{
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById('quote-content').innerHTML = `${data[Math.floor(Math.random()*data.length)].text} - ${data[Math.floor(Math.random()*data.length)].author}`
  });

}

function getWeather()
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Evanston&appid=aaa9323b5c8689c2a78bd9ba797828f0`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length == 0){
                alert("No such location");
            }
            else{
                document.getElementById('weather-content').innerHTML = '';
                const template = `<section class="weather-card" id=${data.weather[0].id}>
                                    <div>
                                        <h3>Temperature is ${(data.main.temp).toFixed(0)} K</h3>
                                        <h4>${String(data.weather[0].description)}</h4>
                                        <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png></img>
                                    </div>
                                </section>`;
                document.getElementById('weather-content').innerHTML += template;
            }
            
        });
}
