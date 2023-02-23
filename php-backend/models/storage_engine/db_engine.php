<?php
class SQL_db
{
  private $db_connection = null;

  public function __construct($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME) {
    //Attempt establishing a connection to the database using provided info
    $this->$db_connection = new mysqli($DB_HOST, $DB_NAME, $DB_USER, $DB_PASSWORD);
    $errno = $this->$db_connection -> connect_errno;
    echo "hi there";
    
    if ($errno) {
      throw new Exception("Could not connect to the database {$DB_NAME}. Exited witth {$errno}");
    }
  }

  public function query_db($query) {
    //Queries the db
    $result = $this -> $db_connection -> query($query);
    if (!$result) {
      throw new Exception("Error processing query {$query}");
    }
    return $result -> fetch_all();
  }
  
}
