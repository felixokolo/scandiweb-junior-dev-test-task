import React, { Component } from "react";
import ProductList from "../components/productList";
import { Link } from "react-router-dom";
import "./css/homePage.css";
class HomePage extends Component {
  constructor(props) {
    super();
    this.componentDidMount.bind();
    this.state = {
      error: null,
      isLoaded: false,
      products: [
        {
          sku: "JVC200123",
          unit: { name: "Size", dim: "MB" },
          name: "Acme DISC",
          price: "7.0",
          description: "Dimension: 24x45x15",
        },
        {
          sku: "JVC200124",
          unit: { name: "Size", dim: "MB" },
          name: "Acme DISC",
          price: "7.0",
          description: "Dimension: 24x45x15",
        },
        {
          sku: "JVC200125",
          unit: { name: "Size", dim: "MB" },
          name: "Acme DISC",
          price: "7.0",
          description: "Dimension: 24x45x15",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/index.php")
      .then((res) => res.text())
      .then(
        (res) => {
          console.log(JSON.parse(res));
          this.setState(
            {
              ...this.state,
              error: null,
              isLoaded: true,
              products: JSON.parse(res),
            },
            () => console.log(this.state, "the main state")
          );
        },
        (error) => {
          this.setState({ ...this.state, error: error, isLoaded: false });
        }
      );
  }
  render() {
    /* const proucts = [
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
    ]; */

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
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div id="list-page">
          <ProductList list={this.state["products"]} />
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
