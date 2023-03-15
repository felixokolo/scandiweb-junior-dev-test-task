<?php

require_once __DIR__. "/product.php";

class Book extends Product{

  protected $weight;
  protected $type = 'Book';

  public function __construct($sku, $name, $price,
                              $weight)
  {
    parent::__construct($sku, $name, $price);
    $this -> setdetails('weight', $weight);
  }

  public function getDescription()
  {
    return "Weight: {$this->weight}KG";
  }
}