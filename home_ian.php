<!DOCTYPE html>

<html lang="en">

<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <link rel="stylesheet" href="home-style.css"/>
    <link rel="stylesheet" href="fontawesome-free-5.12.1-web/css/all.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
	<title>Sweather Home Page</title>
</head>

<body onload="initialLoading()">

    <div class = "content">
        <header class="app-header">
            <div class="container">
                <h1>Welcome Ian</h1>
            </div>
        </header>
    </div>

<!--<p>Welcome to home page</p>-->
    <!--<p><a href="auth/logout.php">Logout</a>-->

    <div id="grid-container">
            <section class="weather">
                <div id="today">
                    TODAY
                </div>
                
                <section id="weather-content">weather goes here</section>
            </section>

            <section class="outfit">
                <div id="outfit-today">
                    OUTFIT
                </div>

                <img src="img/northfacehooie.jpg"/>
                <img src="img/nikepants.jpg"/>
                <img src="img/adidasshoes.jpg"/>

                <input type="submit" class="btn" value="STYLEME">

            </section>  

            <section class="events">
                <div id="events-today">
                    EVENTS
                </div>

                <span>
                    <h3>
                    FRI, FEB 28
                    </h3>
                </span>

                <div class="event-block">
                    <h4>MATH366</h4>
                    <h5>10AM-10:50PM</h5>
                </div>

                <div class="event-block">
                    <h4>CS 330</h4>
                    <h5>1-1:50PM</h5>
                </div>

                <div class="event-block">
                    <h4>CS 349</h4>
                    <h5>3:30-4:50PM</h5>
                </div>

                <div class="event-block">
                    <h4>NAP</h4>
                    <h5>5-7PM</h5>
                </div>

                <div class="event-block">
                    <h4>DINNER</h4>
                    <h5>7-8PM</h5>
                </div>
                
            </section>   

            <section class="quote">
                <div id="quote-today">
                    QUOTE
                </div>
                
                <section id="quote-content">quote goes here</section>
            </section>

            <section class="suggestor">
                <div id="suggestions-today">
                    SUGGESTIONS
                </div>

                <span>
                    You might like...
                </span>

                <img src="https://i.pinimg.com/236x/e9/80/2e/e9802e933583c12e28c62b15a1534859.jpg"/>
                <img src="https://i.pinimg.com/236x/2b/4b/29/2b4b292b6215140441f5adf97b125c77.jpg"/>

            </section>  
        </div>
    </div>

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
