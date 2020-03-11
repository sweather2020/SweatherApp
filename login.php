<?php

if ( ! isset( $_POST['submitted'] ) )
header('Location: ' . $_SERVER['HTTP_REFERER']);

$credentials = [
    'email' => 'brian@example.com',
    'password' => '123456',
    'email2' => 'ian@example.com',
    'password2'=> '123456'
];

if (( $credentials['email'] !== $_POST['email'] OR $credentials['password'] !== $_POST['password'] ) 
    AND ( $credentials['email2'] !== $_POST['email'] OR $credentials['password2'] !== $_POST['password'] ))
{    
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit();
}

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