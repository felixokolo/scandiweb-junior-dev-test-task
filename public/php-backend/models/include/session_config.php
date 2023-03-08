<?php
	require_once __DIR__. "/../storage_engine/include/db_config.php";
	require_once __DIR__. "/../storage_engine/db_engine.php";


	$db = null;
try {
    $db = new SQL_db(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
}
catch(Exception $e) {
    echo $e -> getMessage();
}