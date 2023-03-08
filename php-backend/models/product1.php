<?php
class Product {

	public function __construct($sku, $name, $price, $type, $description) {

		if (!(
		gettype($sku) === "string" &&
		gettype($name) === "string" &&
		gettype($price) === "double" &&
		gettype($type) === "string" &&
		gettype($description) === "string")) {
			throw new Exception("Data type error. Requires (string, string, double, string, string) but got "
								.gettype($sku) .gettype($name) .gettype($price) .gettype($type) .gettype($description));
		}

		$this -> sku = $sku;
		$this -> name = $name;
		$this -> price = $price;
		$this -> type = $type;
		$this -> description = $description;
	}

	public function save($db) {
	
		
		try {
			$res = $db -> query_db("SELECT sku FROM products WHERE sku='{$this -> sku}'");
			if (!$res) {
				$que = "INSERT INTO products (sku, name, price, type, description) VALUES ".
				"('{$this -> sku}', '{$this -> name}', '{$this -> price}', '{$this -> type}', '{$this -> description}')";
				$res = $db -> query_db($que);
				if ($res) {
					return json_encode(array("status" => "OK", "statusCode" => 200));

				}
				else
					throw new Exception('Error occured while querying db');
			}
			else 
				throw new Exception('SKU exists');
		
		}
		catch (Exception $e) {
			return json_encode(array("status" => "Error", "statusCode" => 400, "message" => $e->getMessage()));
		}
	}


	static public function get_products($db) {
		$result = $db->query_db("SELECT * FROM products ORDER BY sku DESC");
		return json_encode($result);
	}

	static public function delete_products($db, $items) {
		$params = [];
		foreach ($items as $val) {
			array_push($params, "sku = '{$val}'");
		}
		$result = $db->query_db("DELETE FROM products WHERE ". join(' OR ', $params));
		return json_encode($result);
	}

}