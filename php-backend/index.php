<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header("Content-Type: application/json");
require_once "./models/product.php";
require_once __DIR__. "/models/include/session_config.php";


if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['PATH_INFO'] === '/delete') {
    $in = json_decode(file_get_contents('php://input'), true);
    error_log(json_encode($in));
    if (count($in['selected']) > 0){
    echo Product::delete_products($db, $in['selected']);
    } else {
        echo json_encode(array("status"=>"ERROR"));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($_SERVER['PATH_INFO']))
{
    header("HTTP/1.1 200 OK");
    $in = json_decode(file_get_contents('php://input'), true);
    try {
    $product1 = new Product(stripslashes($in['sku']),
                            stripslashes($in['name']),
                            floatval($in['price']),
                            stripslashes($in['type']),
                            stripslashes($in['description']));
    $resp = $product1->save($db);
    header("HTTP/1.1 200 OK");
    error_log($resp);
    echo $resp;
    }
    catch(Exception $e) {
        header("HTTP/1.1 500 " .$e->getMessage() );
        echo json_encode(array("status" => "Error", "statusCode" => 400, "message" => $e->getMessage()));
    }

    
}

else if ($_SERVER['REQUEST_METHOD'] === 'GET'){
header("HTTP/1.1 200 OK");
echo Product::get_products($db);
}

//curl -H 'Content-Type: application/json' -X POST -d '{ "sku": "JVC2342", "name": "Alice and the wonder land", "price": 21.43, "type": "Book", "description": "Weight: 3KG"}' localhost:8000