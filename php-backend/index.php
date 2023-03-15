<?php

require_once __DIR__. "/models/routes/router.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials', 'true');

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header("Content-Type: application/json");
$method = $_SERVER['REQUEST_METHOD'];
$in = json_decode(file_get_contents('php://input'), true);
$route = $_SERVER['PATH_INFO']?? '/';
$router = new Router($method, $route, $in);

$res = $router->process();
echo json_encode($res);
