<?php

require_once __DIR__. "/product.php";

class Furniture extends Product{

  protected $height, $width, $length;
  protected $type = 'Furniture';
  protected $description = "";

  public function __construct($sku, $name, $price,
                              $height, $width, $length)
  {
    parent::__construct($sku, $name, $price);
    $this -> setdetails('height', $height);
		$this -> setdetails('width', $width);
		$this -> setdetails('length', $length);
    $this -> description = "Dimension: {$this->height}x{$this->width}x{$this->length}";
  }

  public function getDescription()
  {
    return $this -> description;
  }
}