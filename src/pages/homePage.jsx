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
      selected: {},
      setSelected: (val) => {
        this.setState({ ...this.state, selected: val });
      },
      products: [],
    };
  }

  fetchdb = (url) => {
    fetch(url)
      .then((res) => res.text())
      .then(
        (res) => {
          this.setState({
            ...this.state,
            error: null,
            isLoaded: true,
            products: JSON.parse(res),
          });
        },
        (error) => {
          this.setState({ ...this.state, error: error, isLoaded: false });
        }
      );
  };

  componentDidMount() {
    this.fetchdb("/php-backend/index.php");
    document
      .getElementById("delete-product-btn")
      .addEventListener("click", this.delete);
  }

  delete = () => {
    fetch("/php-backend/index.php/delete", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ selected: Object.keys(this.state.selected) }),
    })
      .then((res) => res.json())
      .then(
        (res) => {
          if (res.status === "OK") {
            this.fetchdb("/php-backend/index.php");
          } else {
          }
        },
        (error) => {}
      );
  };

  render() {
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
                <button id="delete-product-btn" onClick={this.delete}>
                  MASS DELETE
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div id="list-page">
          <ProductList
            list={this.state["products"]}
            setSelected={this.state.setSelected}
          />
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
