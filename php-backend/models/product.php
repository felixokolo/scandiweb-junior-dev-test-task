<?php
require_once __DIR__. "/storage_engine/db_engine.php";

abstract class Product {
	protected $sku;
	protected $name;
	protected $price;
	static protected $db;

	
	public function __set($name, $value)
	{
			switch ($name)
			{
				case 'sku':
				case 'name':
					if (gettype($value) !== 'string' || $value === '' || $value === null)
						throw new Exception("Invalid {$name}");
					else
						$this->$name  = $value;
					break;
				case 'price':
					if (gettype($value) !== 'double' || $value === null)
						throw new Exception("Invalid {$name}");
					else
					{
						$this->$name  = $value;
					}
					break;
				case 'size':
				case 'height':
				case 'width':
				case 'length':
				case 'weight':
					if ((gettype($value) !== 'integer' && gettype($value) !== 'double') || $value === null)
						throw new Exception("Invalid {$name}");
					else
					{
						$this->$name  = $value;
					}
					break;
				
				}

		
	}

	public static function __callStatic($name, $args)
	{
		
		if (!isset(self::$db)) {
			try {
				self::$db = new SQL_db(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
			}
				catch(Exception $e) {
				echo $e -> getMessage();
			}
		}
		if ($name === 'getAll')
		return self::getAll();
		if ($name === 'delete_products')
		return self::delete_products($args[0]);
	}

	public function __get($name) {
		return $this -> $name;
	}

	public function __construct($sku, $name, $price) {
		$this -> __set('sku', $sku);
		$this -> __set('name', $name);
		$this -> __set('price', $price);
		self::__callStatic("__construct", NULL);
	}

	abstract function getDescription();



	public function save() {

		$res = NULL;
		try {
			$res = self::$db -> get($this -> sku);
			//error_log(json_encode($res));
		}
		catch (Exception $e)
		{
			error_log($e -> getMessage());
		}

		if ($res === NULL)
		{
			try
			{
				$que = "INSERT INTO products (sku, name, price, type, description) VALUES ".
				"('{$this -> sku}', '{$this -> name}', '{$this -> price}', '{$this -> type}', '{$this -> getDescription()}')";
				$result = self::$db -> query_db($que);
				return $result;
			}
			catch (Exception $e)
			{
				return array("status" => "Error", "statusCode" => 400, "message" => $e->getMessage());
			}
		}
		else
		{
			return array("status" => "Error", "statusCode" => 400, "message" => 'SKU exists');
		}
	}

	static protected function getAll() {
			error_log("gets here");
			$que = "SELECT * FROM products";
		try {
			$result = self::$db -> query_db($que);
			//error_log(json_encode($result));
			return array("status" => "OK", "statusCode" => 200, "message" => $result);
		}
		catch (Exception $e)
		{
			return array("status" => "Error", "statusCode" => 400, "message" => $e->getMessage());
		}
	}

	static protected function delete_products($items) {
		$params = array();
					foreach ($items["selected"] as $val) {
			array_push($params, "sku = '{$val}'");
		}
		$que = "DELETE FROM products WHERE ". join(' OR ', $params);
		$result = self::$db->query_db($que);
		return json_encode($result);
	}


}