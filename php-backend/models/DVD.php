<?php

require_once __DIR__. "/product.php";

class DVD extends Product{

  protected $size;
  protected $type = 'DVD';

  public function __construct($sku, $name, $price,
                              $size)
  {
    parent::__construct($sku, $name, $price);
    $this -> __set('size', $size);
  }

  public function getDescription()
  {
    return "Size: {$this->size} MB";
  }
}