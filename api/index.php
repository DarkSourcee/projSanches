<?php

session_start();

define('BASE_URL', 'http://localhost:8080/brownieSanches/api/');

include "app/controller/indexController.php";

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$url = (explode('?', $url))[0]; //tudo que for ponto de interrogação é ignorado na url (ex: ?id=1)

$index = new indexController();

switch ($url) {
    //url para tela inicial
    case "/brownieSanches/api/":
        $index->telaIndex();
    break;

    //caso a url não seja encontrada
    default :
        echo 'Página não encontrada';
    break;
}