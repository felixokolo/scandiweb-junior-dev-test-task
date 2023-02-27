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
        /* "Access-Control-Allow-Origin":
          "http://localhost:8000/php-backend/index.php", */
      },
      //mode: "no-cors",

      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  addProduct = (e) => {
    e.preventDefault();
    const details = e.target;
    let postDetails = {};
    postDetails["sku"] = details.sku.value;
    postDetails["name"] = details.name.value;
    postDetails["price"] = parseFloat(details.price.value).toFixed(2);
    postDetails["type"] = details.productType.value;
    switch (postDetails["type"]) {
      case "DVD":
        postDetails["description"] = `Size: ${details.size.value} MB`;
        break;

      case "Book":
        postDetails["description"] = `Weight: ${details.weight.value}KG`;
        break;

      case "Furniture":
        postDetails[
          "description"
        ] = `Dimensions: ${details.height.value}x${details.width.value}x${details.length.value}`;
        break;

      default:
        break;
    }
    this.postData("/php-backend/index.php", postDetails).then((dat) => {
      console.log(dat);
      if (dat.status !== "OK") {
        this.setState({
          ...this.state,
          inputErrors: { ...this.state.inputErrors, sku: dat.message },
        });
      } else window.location.replace("/");
    });
    //if (redir) window.location.replace("http://localhost:3000");
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
