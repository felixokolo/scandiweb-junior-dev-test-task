import React, { Component, useEffect } from "react";
import ProductList from "../components/productList";
import "./css/homePage.css";
import ProductAdd from "../components/formProductAdd";
class ProductAddPage extends Component {
  state = {};
  render() {
    document.title = "Product Add";
    return (
      <form id="product_form" method="post" action="/server.php">
        <div className="header">
          <h1 className="heading">Product Add</h1>
          <div className="buttons">
            <input type="submit" value="Save" />
            <button id="delete-product-btn">Cancel</button>
          </div>
        </div>
        <hr />
        <ProductAdd />
        <div className="footer">
          <hr />
          <p>Scandiweb Test assignment</p>
        </div>
      </form>
    );
  }
}

export default ProductAddPage;
