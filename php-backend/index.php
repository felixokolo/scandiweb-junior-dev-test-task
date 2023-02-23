<?php

require_once "./models/storage_engine/include/db_config.php";
require_once "./models/storage_engine/db_engine.php";
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
$db = null;
try {
    $db = new SQL_db(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
}
catch(Exception $e) {
    echo $e -> getMessage();
}

$result = $db->query_db("SELECT * FROM products ORDER BY sku DESC");
echo json_encode($result);