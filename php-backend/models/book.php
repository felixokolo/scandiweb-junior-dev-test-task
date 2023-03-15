<?php

require_once __DIR__. "/product.php";

class Book extends Product{

  protected $weight;
  protected $type = 'Book';
  protected $description = "";

  public function __construct($sku, $name, $price,
                              $weight)
  {
    parent::__construct($sku, $name, $price);
    $this -> setdetails('weight', $weight);
    $this -> description = "Weight: {$this->weight}KG";
  }

  public function getDescription()
  {
    return $this -> description;
  }
}