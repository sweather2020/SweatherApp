<?php

/*if ( ! isset( $_POST['submitted'] ) )
header('Location: ' . $_SERVER['HTTP_REFERER']);*/

/*foreach($_POST as $key=>$value)
{
  echo "$key=$value";
}*/

session_start();

// Storing session data
$_SESSION["user"] = $_POST['email'];
$_SESSION["isLogged"] = "1";


header('Location:' . 'home.php');

/*
if ( $credentials['email'] == $_POST['email'] AND $credentials['password'] == $_POST['password'] ) 
{    
    header('Location:' . 'home.php');
}
else if ( $credentials['email2'] == $_POST['email'] AND $credentials['password2'] == $_POST['password'] ) 
{    
    header('Location:' . 'home.php');
}

else {
    header('Location:' . 'home.php');
}
*/


exit();
?>