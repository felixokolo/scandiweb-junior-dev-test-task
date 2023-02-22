<?php
echo 'hello felix';
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

        }	

