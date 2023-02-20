import React, { Component } from "react";
import ProductList from "../components/productList";
import "./css/homePage.css";
class HomePage extends Component {
  state = {};
  render() {
    const proucts = [
      {
        sku: "JVC200123",
        unit: { name: "Size", dim: "MB" },
        name: "Acme DISC",
        price: "7.0",
        value: "700",
      },
      {
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        sku: "JVC200123",
        unit: { name: "Size", dim: "MB" },
        name: "Acme DISC",
        price: "7.0",
        value: "700",
      },
      {
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
    ];
    return (
      <div>
        <div className="header">
          <h1 className="heading">Product List</h1>
          <div className="buttons">
            <button>ADD</button>
            <button id="delete-product-btn">MASS DELETE</button>
          </div>
        </div>
        <hr />
        <ProductList list={proucts} />
        <div className="footer">
          <hr />
          <p>Scandiweb Test assignment</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
