<?php
require_once __DIR__. "/../furniture.php";
require_once __DIR__. "/../DVD.php";
require_once __DIR__. "/../book.php";
require_once __DIR__. "/../product.php";

class Router {


  public function __construct() {
    $props = array('Furniture'=>array('props'=>array('height', 'width', 'length'), 'func'=> Furniture),
                 'DVD' => array('props'=>array('size'), 'func'=>DVD),
                 'Book' => array('props'=>array('weight'), 'func'=>Book));
  }
  

  static public function postProducts($details) {
    $type = $details['type']?? NULL;
    $name = $details['name']?? NULL;
    $sku = $details['sku']?? NULL;
    $price = $details['price']?? NULL;

    if ($type !== NULL) {
      $prop = $this->props[$type];
      $prop['func']($sku, $name, $price);
    }
  }

  static public function getProducts() {
    return Product::getAll();
  }
}