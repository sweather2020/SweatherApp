<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Title -->
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <link rel="stylesheet" href="login-style.css"/>
    <link rel="stylesheet" href="fontawesome-free-5.12.1-web/css/all.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
	<title>Sweather Login Page</title>

	<style>
		label {
			width: 100%;
			max-width: 100px;
			display: inline-block;
			text-align: right;
		}

		div {
			margin-top: 1em;
		}
	</style>

</head>

<body>
	<div class="login-containter">
		<form action="login.php" method="post">
			<div id="logo-header">
				<h2>SWEATHER</h2>
				<img class="logo" src="sweather_logo.png">
			</div>	
			
				<div class="input-div" tabindex="1">
					<div class="i">
						<i class="fas fa-user"></i>
					</div>
					<div>
						<!--<h5>EMAIL</h5>-->
						<input type="text" name="email" placeholder="EMAIL">
					</div>
				</div>

				<div class="input-div">
					<div class="i">
						<i class="fas fa-lock"></i>
					</div>
					<div>
						<!--<h5>PASSWORD</h5>-->
						<input type="password" name="password" placeholder="PASSWORD">
					</div>
				</div>

				<a href="#">FORGOT PASSWORD?</a>

				<input type='submit' class="btn" value="LOGIN">
			
			
			<input type="hidden" name="submitted" value="1">
		</form>
	</div>
</body>

</html>
