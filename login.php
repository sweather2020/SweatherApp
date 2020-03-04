<?php

if ( ! isset( $_POST['submitted'] ) )
header('Location: ' . $_SERVER['HTTP_REFERER']);

$credentials = [
    'email' => 'brian@example.com',
    'password' => '123456'
];

if ( $credentials['email'] !== $_POST['email'] OR $credentials['password'] !== $_POST['password'] )
{    
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit();
}

session_start();

// Storing session data
$_SESSION["isLogged"] = "1";

header('Location:' . '../SweatherApp-Proj6/home.php');

exit();
