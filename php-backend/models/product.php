<?php



class Product {

	public function __construct($sku, $name, $price, $type, $description) {

		if (!(
		gettype($sku) === "string" &&
		gettype($name) === "string" &&
		gettype($price) === "double" &&
		gettype($type) === "string" &&
		gettype($description) === "string")) {
			throw new Exception("Data type error. Requires (string, string, double, string, string) but got".
								"{$gettype($sku)}, {$gettype($name)}, {$gettype($price)}, {$gettype($type)}, {$gettype($description)}");
		}

		$this -> $sku = $sku;
		$this -> $name = $name;
		$this -> $price = $price;
		$this -> $type = $type;
		$this -> $description = $description;
	}


	static public function get_products($db) {
		$result = $db->query_db("SELECT * FROM products ORDER BY sku DESC");
		return json_encode($result);
	}

}