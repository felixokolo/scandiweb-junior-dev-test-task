<?php
require_once __DIR__. "/../furniture.php";
require_once __DIR__. "/../DVD.php";
require_once __DIR__. "/../book.php";
require_once __DIR__. "/../product.php";

class Router {

  private $method;
  private $data;
  private $route;

  public function __set($name, $value) {
    /**
     * Magic setter method;
     */
    $this->$name = $value;
  }

  public function __construct($method, $route, $data) {
    /**
     * Constructs an instance of the router class
     * method: eg GET or POST
     * route: / or /delete
     * data: data to post.
     */

    $this->__set('method', $method);
    $this->__set('data', $data);
    $this->__set('route', $route);
  }
  

  private function getProducts() {
    /**
     * Returns all products in the products table.
     */
    return Product::getAll();
  }

  public function process() {
    /**
     * Processes the request based on the given method and route
     */
    switch ($this->method) {
      case 'GET':
        return $this->getProducts();
        break;
      case 'POST':
        
        switch($this->route){
          case '/':
            switch ($this->data['type']){
              case 'Furniture':
                $furniture = new Furniture($this->data['sku'],
                                           $this->data['name'],
                                           floatval($this->data['price']),
                                           $this->data['height'],
                                           $this->data['width'],
                                           $this->data['length'],);
                return $furniture->save();
                break;
              case 'DVD':
                $dvd = new DVD($this->data['sku'],
                               $this->data['name'],
                               floatval($this->data['price']),
                               $this->data['size']);
                return $dvd->save();
                break;
              case 'Book':
                $book = new Book($this->data['sku'],
                                 $this->data['name'],
                                 floatval($this->data['price']),
                                 $this->data['weight']);
                return $book->save();
                break;
              default:
                break;
              }
              break;
            break;
          case '/delete':
            return Product::delete_products($this -> data);
            break;
          default:
          break;
          }
      default:
        break;
    }
  }

}