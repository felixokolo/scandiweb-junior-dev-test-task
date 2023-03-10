import React, { Component } from "react";
import "./css/productAddPage.css";
import ProductAdd from "../components/formProductAdd";
import { Link } from "react-router-dom";
class ProductAddPage extends Component {
  state = {
    clickable: true,
    inputErrors: {
      sku: "",
      name: "",
      price: "",
      productType: "",
      dimensions: "",
    },
    setError: (val) => {
      this.setState({ ...this.state, inputErrors: val });
    },
  };

  postData = async (url, data) => {
    return await fetch(url, {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  addProduct = (e) => {
    e.preventDefault();
    const details = e.target;
    console.log(details);
    let postDetails = {};
    let n = 2;
    while (details[n] !== undefined) {
      postDetails[details[n].name] = details[n].value;
      n++;
    }
    postDetails.price = postDetails.price
      ? parseFloat(postDetails.price).toFixed(2)
      : null;
    postDetails.weight = postDetails.weight
      ? parseInt(postDetails.weight)
      : null;
    postDetails.height = postDetails.height
      ? parseInt(postDetails.height)
      : null;
    postDetails.length = postDetails.length
      ? parseInt(postDetails.length)
      : null;
    postDetails.width = postDetails.width ? parseInt(postDetails.width) : null;
    postDetails.size = postDetails.size ? parseInt(postDetails.size) : null;
    console.log(postDetails);
    this.postData("/php-backend/index.php", postDetails).then((dat) => {
      if (dat.status !== "OK") {
        this.setState({
          ...this.state,
          inputErrors: { ...this.state.inputErrors, sku: dat.message },
        });
      } else window.location.replace("/");
    });
  };
  render() {
    document.title = "Product Add";
    return (
      <React.Fragment>
        <form id="product_form" action="#" onSubmit={this.addProduct}>
          <div className="product-add-header">
            <div className="cont">
              <div className="title-buttons">
                <h1 className="heading">Product Add</h1>
                <div className="buttons">
                  <input
                    type="submit"
                    value="Save"
                    disabled={
                      Object.keys(this.state["inputErrors"]).length !== 0
                    }
                  />
                  <Link to="/">
                    <button id="delete-product-btn">Cancel</button>
                  </Link>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <ProductAdd
            setError={this.state["setError"]}
            inputErrors={this.state.inputErrors}
          />
        </form>
        <div className="foot">
          <div className="cont">
            <hr />
            <p>Scandiweb Test assignment</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductAddPage;
