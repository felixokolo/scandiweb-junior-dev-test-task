import React, { Component } from "react";
import Product from "./productItem";
import "./css/productList.css";

class ProductList extends Component {
  state = { ...this.props };
  render() {
    if (this.props.list.length === 0) {
      return (
        <div className="product-list">
          <h2>No items</h2>
        </div>
      );
    }
    return (
      <div className="product-list">
        {this.props.list.map((product) => (
          <Product {...product} key={product.sku} />
        ))}
      </div>
    );
  }
}

export default ProductList;
