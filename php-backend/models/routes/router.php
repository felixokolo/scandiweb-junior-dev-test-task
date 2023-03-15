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
  

  public function getProducts() {
    /**
     * Returns all products in the products table.
     */
    return Product::getAll();
  }

  public function process() {
    /**
     * Processes the request based on the given method and route
     */
    
    $endpoints = [
      '/get_products' => function () {
        return $this->getProducts();
      },
      '/post_dvd' => function () {
        $dvd = new DVD(
                        $this->data['sku'],
                        $this->data['name'],
                        floatval($this->data['price']),
                        $this->data['size']);
                return $dvd->save();
      },
      '/post_furniture' => function () {
        $furniture = new Furniture(
                                    $this->data['sku'],
                                    $this->data['name'],
                                    floatval($this->data['price']),
                                    $this->data['height'],
                                    $this->data['width'],
                                    $this->data['length'],);
        return $furniture->save();
      },
      '/post_book' => function () {
        $book = new Book(
                          $this->data['sku'],
                          $this->data['name'],
                          floatval($this->data['price']),
                          $this->data['weight']);
        return $book->save();
      },
      '/delete' => function () {
        return Product::delete_products($this -> data);
      }
    ];

    return $endpoints[$this->route]();
  }

}