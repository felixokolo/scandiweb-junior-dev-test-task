import React, { Component } from "react";
import "./css/forms.css";
import DVDForm from "./formDVD";
import FurnitureForm from "./formFurniture";
import BookForm from "./formBook";
class ProductAdd extends Component {
  empty = () => <div className="container  empty">
    <p>Select a product type</p>
  </div>;
  state = {
    selected: this.empty(),
  };

  types = {
    None: this.empty(),
    DVD: <DVDForm />,
    Furniture: <FurnitureForm />,
    Book: <BookForm />,
  };
  skuId = "sku";
  nameId = "name";
  priceId = "price";

  validate = (e) => {
    let states = this.state;
    const inputBox = e.target;
    const text = inputBox.value;
    if (isNaN(text)) {
      states[inputBox.id] = "Please, provide the data of indicated type";
      this.setState({ ...states });
      inputBox.classList.add("warner");
    } else {
      states[inputBox.id] = "";
      this.setState({ ...states });
      inputBox.classList.remove("warner");
    }
  };

  switcher = (e) => {
    const selectedType = e.target.value;
    this.setState({ ...this.state, selected: this.types[selectedType] });
  };
  render() {
    return (
      <div>
        <div className="container">
          <label htmlFor="sku">
            <p>SKU</p>
            <div className="input-warning">
              <input id={this.skuId} type="text" name="sku" />
              <small className="warning">{this.state[this.skuId]}</small>
            </div>
            <br />
          </label>
          <label htmlFor="name">
            <p>Name</p>
            <div className="input-warning">
              <input id={this.nameId} type="text" name="name" />
              <small className="warning">{this.state[this.nameId]}</small>
            </div>
            
            <br />
          </label>
          <label htmlFor="price">
            <p>Price ($)</p>
            <div className="input-warning">
              <input
                id={this.priceId}
                type="text"
                onKeyUp={this.validate}
                name="price"
              />
              <small className="warning">{this.state[this.priceId]}</small>
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
            <small> </small>
            </div>
          </label>
        </div>
        <div>{this.state["selected"]}</div>
      </div>
    );
  }
}

export default ProductAdd;
