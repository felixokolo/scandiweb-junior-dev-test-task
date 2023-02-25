<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
require_once "./models/product.php";
require_once __DIR__. "/models/include/session_config.php";

/* echo 'hello felix';
define("DB_HOST", "localhost");

define("DB_USERNAME", "pheelix");

define("DB_PASSWORD", "");

define("DB_DATABASE_NAME", "pheelix_products");
$query = 'SELECT * FROM products';

$connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);

            if ( $connection  -> connect_errno) {

                echo 'error'. $connection -> connect_error;
                exit();

            }
try {
	$state = $connection->query( $query );
            if($state === false) {

                echo $query;

            }

echo json_encode($state -> fetch_all(MYSQLI_ASSOC));
$state->close();
}

catch(Exception $e) {

            echo $e->getMessage();
            echo $query;

        }	 */
if ($_SERVER['REQUEST_METHOD' === 'POST'])
{
    echo json_encode(parse_url($_SERVER['REQUEST_URI']));
}

//$product1 = new Product("OLO1234", "Freda", 25.22, "DVD", "Size: 300MB");
else if (true){header("Content-Type: application/json");
header("HTTP/1.1 200 OK");
echo Product::get_products($db);}