<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header("Content-Type: application/json");
require_once __DIR__. "/models/routes/router.php";


$method = $_SERVER['REQUEST_METHOD'];
$in = json_decode(file_get_contents('php://input'), true);
$route = $_SERVER['PATH_INFO']?? '/';
$router = new Router($method, $route, $in);

$res = $router->process();
echo json_encode($res);

//curl -H 'Content-Type: application/json' -X POST -d '{ "sku": "JVC2342", "name": "Alice and the wonder land", "price": 21.43, "type": "Book", "description": "Weight: 3KG"}' localhost:8000
