<?php

require_once __DIR__. "/product.php";

class DVD extends Product{

  protected $size;
  protected $type = 'DVD';
  protected $description = "";

  public function __construct($sku, $name, $price,
                              $size)
  {
    parent::__construct($sku, $name, $price);
    $this -> setdetails('size', $size);
    $this -> description = "Size: {$this->size} MB";
  }

  public function getDescription()
  {
    return $this -> description;
  }
}