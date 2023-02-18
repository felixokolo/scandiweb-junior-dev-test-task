import React, { Component } from "react";
import Product from "./productItem";
import "./css/productList.css";

class ProductList extends Component {
  state = { ...this.props };
  render() {
    return (
      <div className="product-list">
        {this.state.list.map((product) => (
          <Product {...product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
