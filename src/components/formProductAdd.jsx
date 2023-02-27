import React, { Component } from "react";
import "./css/forms.css";
import DVDForm from "./formDVD";
import FurnitureForm from "./formFurniture";
import BookForm from "./formBook";
class ProductAdd extends Component {
  empty = () => (
    <div className="container  empty">
      <p>Select a product type</p>
    </div>
  );
  state = {
    selected: this.empty(),
    errors: { ...this.props.inputErrors },
    setError: (val) => {
      delete this.props.inputErrors["dimensions"];
      this.props.setError({ ...this.props.inputErrors, ...val });
    },
  };

  types = {
    None: this.empty(),
    DVD: (
      <DVDForm
        setError={this.state["setError"]}
        inputErrors={{ dimensions: "" }}
      />
    ),
    Furniture: (
      <FurnitureForm
        setError={this.state["setError"]}
        inputErrors={{ dimensions: "" }}
      />
    ),
    Book: (
      <BookForm
        setError={this.state["setError"]}
        inputErrors={{ dimensions: "" }}
      />
    ),
  };
  skuId = "sku";
  nameId = "name";
  priceId = "price";
  switcherId = "productType";

  validateNames = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;
    const message =
      text === ""
        ? "Please, submit required data"
        : "Please, provide the data of indicated type";

    if (inputBox.id === this.skuId || inputBox.id === this.nameId) {
      if (text === "") {
        this.props.setError({
          ...this.props.inputErrors,
          [inputBox.id]: message,
        });

        inputBox.classList.add("warner");
      } else {
        delete this.props.inputErrors[inputBox.id];
        this.props.setError(this.props.inputErrors);
        inputBox.classList.remove("warner");
      }
    }
  };

  validate = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;
    const message =
      text === ""
        ? "Please, submit required data"
        : "Please, provide the data of indicated type";
    if (inputBox.id === this.priceId) {
      if (isNaN(text) || text === "") {
        this.props.setError({
          ...this.props.inputErrors,
          [inputBox.id]: message,
        });
        inputBox.classList.add("warner");
      } else {
        delete this.props.inputErrors[inputBox.id];
        this.props.setError(this.props.inputErrors);
        inputBox.classList.remove("warner");
      }
    }
  };

  switcher = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;
    const message = "Please, submit required data";
    const selectedType = e.target.value;
    if (text === "None") {
      this.setState(
        {
          ...this.state,
          selected: this.types[selectedType],
          errors: { ...this.state.errors, [inputBox.id]: message },
        },
        () => {
          this.props.setError({
            ...this.props.inputErrors,
            [inputBox.id]: message,
          });
        }
      );
      inputBox.classList.add("warner");
    } else {
      this.setState({ ...this.state, selected: this.types[selectedType] });
      delete this.props.inputErrors[inputBox.id];
      this.props.setError(this.props.inputErrors);
      inputBox.classList.remove("warner");
    }
    this.props["setError"]({ ...this.props.inputErrors, dimensions: "" });
  };

  render() {
    return (
      <div>
        <div className="container">
          <label htmlFor="sku">
            <p>SKU</p>
            <div className="input-warning">
              <input
                id={this.skuId}
                type="text"
                name="sku"
                onChange={this.validateNames}
              />
              <small className="warning">
                {this.skuId in this.props.inputErrors
                  ? this.props.inputErrors[this.skuId]
                  : ""}
              </small>
            </div>
            <br />
          </label>
          <label htmlFor="name">
            <p>Name</p>
            <div className="input-warning">
              <input
                id={this.nameId}
                type="text"
                name="name"
                onChange={this.validateNames}
              />
              <small className="warning">
                {this.nameId in this.props.inputErrors
                  ? this.props.inputErrors[this.nameId]
                  : ""}
              </small>
            </div>

            <br />
          </label>
          <label htmlFor="price">
            <p>Price ($)</p>
            <div className="input-warning">
              <input
                id={this.priceId}
                type="text"
                onChange={this.validate}
                name="price"
              />
              <small className="warning">
                {this.priceId in this.props.inputErrors
                  ? this.props.inputErrors[this.priceId]
                  : ""}
              </small>
            </div>

            <br />
          </label>
          <label htmlFor="productType">
            <p>Type Switcher</p>
            <div className="input-warning">
              <select
                name="productType"
                id="productType"
                onChange={this.switcher}
              >
                <option value="None">None</option>
                <option value="DVD">DVD</option>
                <option value="Furniture">Furniture</option>
                <option value="Book">Book</option>
              </select>
              <small className="warning">
                {this.switcherId in this.props.inputErrors
                  ? this.props.inputErrors[this.switcherId]
                  : ""}
              </small>
            </div>
          </label>
        </div>
        <div>{this.state["selected"]}</div>
      </div>
    );
  }
}

export default ProductAdd;
