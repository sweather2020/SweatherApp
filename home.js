
const initialLoading = () =>{
    loadquote();
    getWeather();
    loadDate();
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

const loadDate = () =>{
  let d = new Date();
     
  let date = d.getDate();
  console.log(date);
  let month = d.getMonth(); // Since getUTCMonth() returns month from 0-11 not 1-12
  //let year = d.getUTCFullYear();
  let day = d.getDay();
  switch (day) {
    case 0:
      day = "SUN";
      break;
    case 1:
      day = "MON";
      break;
    case 2:
       day = "TUES";
      break;
    case 3:
      day = "WED";
      break;
    case 4:
      day = "THURS";
      break;
    case 5:
      day = "FRI";
      break;
    case 6:
      day = "SAT";
  }

  switch (month){
    case 0:
      month="JAN";
      break;
    case 1:
      month="FEB";
      break;
    case 2:
      month="MAR";
      break;
    case 3:
      month="APR";
      break;
    case 4:
      month="MAY";
      break;
    case 5:
      month="JUN";
      break;
    case 6:
      month="JUL";
      break;
    case 7:
      month="AUG";
      break;
    case 8:
      month="SEP";
      break;
    case 9:
      month="OCT";
      break;
    case 10:
      month="NOV";
      break;
    case 11:
      month="DEC";
      break;
  }
  let myDate = day + "," + " " + month + " " + date;
  document.getElementById('myDate').innerHTML = myDate;
}

function getWeather()
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Evanston&appid=aaa9323b5c8689c2a78bd9ba797828f0&units=Imperial`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length == 0){
                alert("No such location");
            }
            else{
                document.getElementById('weather-content').innerHTML = '';
                const template = `<section class="weather-card" id=${data.weather[0].id}>
                                  <div id="weather-container">  
                                    <div id="weather-data">
                                        <h1>Evanston, IL</h1>
                                        <h2>${(data.main.temp).toFixed(0)} F°</h2>
                                        <h4>Feels like ${(data.main.feels_like).toFixed(0)}°</h4>
                                        <h4>${(data.main.temp_max).toFixed(0)}° | ${(data.main.temp_min).toFixed(0)}°</h4> 
                                    </div>
                                    <div id="weather-icon"> 
                                        <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png></img>
                                    </div> 

                                    <div id="weather-description">  
                                        <h4>${String(data.weather[0].description)}</h4>
                                    </div>
                                  </div>
                                    
                                </section>`;
                document.getElementById('weather-content').innerHTML += template;
            }
            
        });
}
