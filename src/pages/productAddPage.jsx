import React, { Component } from "react";
import "./css/productAddPage.css";
import ProductAdd from "../components/formProductAdd";
import { Link}
from 'react-router-dom';
class ProductAddPage extends Component {
  state = {
    clickable: true,
    inputErrors: {},
    setError: (val) => {
      this.setState({...this.state, inputErrors: val})
    }
  };

  addProduct = () => {

  }
  render() {
    document.title = "Product Add";
    return ( 
      <React.Fragment>
      <form id="product_form" method="post" action="http://localhost:8000/index.php/products">
        <div className="product-add-header">
          <div className="cont">
            <div className="title-buttons">
              <h1 className="heading">Product Add</h1>
              <div className="buttons">
                <input type="submit" value="Save" disabled={Object.keys(this.state['inputErrors']).length !== 0} />
                <Link to="/">
                <button id="delete-product-btn">Cancel</button>
                </Link>
              </div>
            </div>
              <hr />
          </div>
        </div>
        <ProductAdd setError={this.state['setError']} />
      </form>
      <div className="foot">
          <div className="cont">
            <hr/>
            <p>Scandiweb Test assignment</p>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default ProductAddPage;
