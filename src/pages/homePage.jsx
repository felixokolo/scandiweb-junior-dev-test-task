import React, { Component } from "react";
import ProductList from "../components/productList";
import { Link } from "react-router-dom";
import "./css/homePage.css";
class HomePage extends Component {
  state = {};
  render() {
    const proucts = [
      {
        id: 1,
        sku: "JVC200123",
        unit: { name: "Size", dim: "MB" },
        name: "Acme DISC",
        price: "7.0",
        value: "700",
      },
      {
        id: 2,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        id: 3,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        id: 4,
        sku: "JVC200123",
        unit: { name: "Size", dim: "MB" },
        name: "Acme DISC",
        price: "7.0",
        value: "700",
      },
      {
        id: 5,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        id: 6,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        id: 7,
        sku: "JVC200123",
        unit: { name: "Size", dim: "MB" },
        name: "Acme DISC",
        price: "7.0",
        value: "700",
      },
      {
        id: 8,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        id: 9,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        id: 10,
        sku: "JVC200123",
        unit: { name: "Size", dim: "MB" },
        name: "Acme DISC",
        price: "7.0",
        value: "700",
      },
      {
        id: 11,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
      {
        id: 12,
        sku: "JVC200124",
        unit: { name: "Weight", dim: "Kg" },
        name: "Chemistry",
        price: "78.0",
        value: "28.5",
      },
    ];

    const readApi = () => {
      console.log("gets here");
      fetch("localhost/php-backend/index.php")
        .then((res) => res.text())
        .then((res) => console.log(res));
    };

    document.title = "Product List";
    return (
      <div id="homePage">
        <div className="header">
          <div className="cont">
            <div className="title-buttons">
              <h1 className="heading">Product List</h1>
              <div className="buttons">
                <Link to="addproduct">
                  <button>ADD</button>
                </Link>
                <Link>
                  <button id="delete-product-btn">MASS DELETE</button>
                </Link>
                <button onClick={readApi}>api</button>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div>
          <ProductList list={proucts} />
        </div>

        <div className="foot">
          <div className="cont">
            <hr />
            <p>Scandiweb Test assignment</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
