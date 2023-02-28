<?php
class SQL_db
{
  private static $db_connection = null;

  public function __construct($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME) {
    //Attempt establishing a connection to the database using provided info
    $this->$db_connection = $this->$db_connection?? new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);
    $errno = $this->$db_connection -> connect_errno;

    
    if ($errno) {
      throw new Exception("Could not connect to the database {$db_NAME}. Exited witth {$errno}");
    }

  }

  public function query_db($query) {
    //Queries the db
    $result = $this -> $db_connection -> query($query);
    if (!$result) {
      throw new Exception("Error processing query {$query}");
    }
    if (gettype($result) !== 'boolean')
    return $result -> fetch_all(MYSQLI_ASSOC);
    else if ($result)
    return array("status" => "OK", "statusCode" => 200);
    else return array("status" => "Error", "statusCode" => 400, "message" => $e->getMessage());
  }
  
}

