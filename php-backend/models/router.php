<?php
require_once __DIR__. "/models/furniture.php";
require_once __DIR__. "/models/DVD.php";
require_once __DIR__. "/models/book.php";

class Router {


  public function __construct() {
    $props = array('Furniture'=>array('props'=>array('height', 'width', 'length'), 'func'=> Furniture),
                 'DVD' => array('props'=>array('size'), 'func'=>DVD),
                 'Book' => array('props'=>array('weight'), 'func'=>Book));
  }
  

  static public function post($details) {
    $type = $details['type']?? NULL;
    $name = $details['name']?? NULL;
    $sku = $details['sku']?? NULL;
    $price = $details['price']?? NULL;

    if ($type !== NULL) {
      $prop = $this->props[$type];
      $prop['func']($sku, $name, $price)
    }
  }
}