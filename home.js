


const loadquote = () =>{
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById('quote-content').innerHTML = `${data[Math.floor(Math.random()*data.length)].text} - ${data[Math.floor(Math.random()*data.length)].author}`
  });

}
