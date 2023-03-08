<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header("Content-Type: application/json");
require_once __DIR__. "/models/furniture.php";
require_once __DIR__. "/models/DVD.php";
require_once __DIR__. "/models/book.php";


//$product1 = new Furniture("GHDK989", "thtr", 1.25, 50., 57.2, 69.5);
//$product1 = new DVD("GHDK987", "Acme dvd", 23.2, 700);
$product1 = new Book("GHDK9875", "Acme dvd", 7.2, 7);
$res = $product1 -> save();
if ($_SERVER['REQUEST_METHOD'] === 'POST')
{$in = json_decode(file_get_contents('php://input'), true);
  error_log(json_encode($in));
echo json_encode($in);}

//curl -H 'Content-Type: application/json' -X POST -d '{ "sku": "JVC2342", "name": "Alice and the wonder land", "price": 21.43, "type": "Book", "description": "Weight: 3KG"}' localhost:8000
