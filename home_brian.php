<?php
    session_start();

    if (array_key_exists("user", $_SESSION) == false){
        header('Location:' . 'index.php');
    }
    
    if ($_SESSION["isLogged"] == "1"){
        /*echo('Logged in');*/
    }

    if (array_key_exists("user", $_SESSION)){
        /*echo($_SESSION["user"]);*/
    }

    else{
        /*echo('Not logged in');*/
    }
?>


<!DOCTYPE html>

<html lang="en">

<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <link rel="stylesheet" href="homestyle2.css"/>
    <link rel="stylesheet" href="fontawesome-free-5.12.1-web/css/all.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
	<title>Sweather Home Page</title>
</head>

<body onload=initialLoading()>
    <div class="overall-content">
        <div class = "content">
            <header class="app-header">
                <div class="container">
                    <div id="cont-greet">
                        <h1 id="greeting"></h1>
                    </div>
                </div>
            </header>
        </div>

        <div id="grid-container">
                <section class="quote">
                    <div id="quote-today">
                        QUOTE
                    </div>
                    
                    <section id="quote-content">quote goes here</section>
                </section>    
        
            <a href="https://openweathermap.org/city" class="weather">
                <section>
                    <div id="today">
                        WEATHER
                    </div>
                    
                    <section id="weather-content">weather goes here</section>
                </section>
                </a>
                <a href="styleme.html" class="outfit">
                    <section>
                        <div id="outfit-today">
                            OUTFIT
                        </div>

                        <img src="img/northfacehooie.jpg"/>
                        <img src="img/nikepants.jpg"/>
                        <img src="img/adidasshoes.jpg"/>

                    </section>  
                </a>
                
                <a href="https://calendar.google.com/calendar/r?pli=1" class="events">
                    <section>
                        <div id="events-today">
                            EVENTS
                        </div>

                        <span>
                            <h3 id="myDate">
                            </h3>
                        </span>

                        <div class="event-block">
                            <h4>CS 213</h4>
                            <h5>11AM-12:20PM</h5>
                        </div>

                        <div class="event-block">
                            <h4>CS 330</h4>
                            <h5>1-1:50PM</h5>
                        </div>

                        <div class="event-block">
                            <h4>DSGN 308</h4>
                            <h5>2-5PM</h5>
                        </div>
                    </section>
                </a>
            </div>
        </div>
    <div>

    <div class="app-footer">
        <ul>
            <li>
                <a href = "home.php" class="fas fa-home"></a>
                <p>HOME</p>
            </li>

            <li>
                <a href = "styleme.html" class="fas fa-tshirt"></a>
                <p>STYLEME</p>
            </li>

            <li id="closet-icon">
                <a href = "closet.html" class="fas fa-door-closed"></a>
                <p>CLOSET</p>
            </li>

            <li>
                <a href = "explore.html" class="fas fa-search"></a>
                <p>EXPLORE</p>
            </li>

            <li>
                <a href = "user.html" class="fas fa-user"></a>
                <p>ME</p>
            </li>           
        </ul>
    </div>

        <script src="home.js"></script>

</body>

</html>
