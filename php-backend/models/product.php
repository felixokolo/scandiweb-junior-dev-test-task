<?php
require_once __DIR__. "/storage_engine/db_engine.php";

abstract class Product {
	protected $sku;
	protected $name;
	protected $price;
	static protected $db;

	// Abstract method for getting description of product type
	abstract function getDescription();

	public function setname($value) {
		if (gettype($value) !== 'string' || $value === '' || $value === null)
					throw new Exception("Invalid name");
				else
					$this->name  = $value;
	}

	public function setsku($value) {
		if (gettype($value) !== 'string' || $value === '' || $value === null)
					throw new Exception("Invalid sku");
				else
					$this->sku  = $value;
	}

	public function setprice($value) {
		if (gettype($value) !== 'double' || $value === null)
					throw new Exception("Invalid price");
				else
				{
					$this->price  = $value;
				}
	}

	public function setdetails ($name, $value) {
		if ((gettype($value) !== 'integer' && gettype($value) !== 'double') || $value === null)
					throw new Exception("Invalid {$name}");
				else
				{
					$this->$name  = $value;
				}
	}
	

	public static function __callStatic($name, $args)
	{
		/**
		 * Magic call static function to instantiate a databse 
		 * connection object
		 */
		
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
		/**
		 * Magic getter function
		 */
		return $this -> $name;
	}

	public function __construct($sku, $name, $price) {
		/**
		 * Creates an instance of a product
		 */
		$this -> setsku($sku);
		$this -> setname($name);
		$this -> setprice($price);
		self::__callStatic("__construct", NULL);
	}


	public function save() {
		/**
		 * Function to save an instance to database
		 */

		$res = NULL;
		try {
			$res = self::$db -> get($this -> sku);
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
		/**
		 * Gets all products in the products table;
		 */
		$que = "SELECT * FROM products";
		try {
			$result = self::$db -> query_db($que);
			return array("status" => "OK", "statusCode" => 200, "message" => $result);
		}
		catch (Exception $e)
		{
			return array("status" => "Error", "statusCode" => 400, "message" => $e->getMessage());
		}
	}

	static protected function delete_products($items) {
		/**
		 * Deletes selected items from the products database
		 */
		$params = array();
					foreach ($items["selected"] as $val) {
			array_push($params, "sku = '{$val}'");
		}
		$que = "DELETE FROM products WHERE ". join(' OR ', $params);
		$result = self::$db->query_db($que);
		return $result;
	}


}