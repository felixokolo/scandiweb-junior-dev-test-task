import React, { Component } from "react";
import "./css/productItem.css";

class Product extends Component {
  state = {
    sku: this.props.sku === undefined ? "New SKU" : this.props.sku,
    name: this.props.name === undefined ? "New Product" : this.props.name,
    price: this.props.price === undefined ? "Price in $" : this.props.price,
    type:
      this.props.type === undefined
        ? "DVD-disc or Book or Furniture"
        : this.props.type,
    description:
      this.props.description === undefined ? "5" : this.props.description,
  };

  render() {
    const state = this.state;
    return (
      <div className="product-card">
        <input type="checkbox" id={state.sku} className="delete-checkbox" />
        <p>{state.sku}</p>
        <p>{state.name}</p>
        <p>{state.price + " $"}</p>
        <p>{state.description}</p>
      </div>
    );
  }
}

export default Product;
