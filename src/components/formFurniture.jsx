import React, { Component } from "react";
import "./css/forms.css";
class FurnitureForm extends Component {
  state = {
    inputError: {
      height: " ",
      width: " ",
      length: " ",
    },
  };
  heightId = "height";
  widthId = "width";
  lengthId = "length";
  validate = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;
    const message =
      text === ""
        ? "Please, submit required data"
        : "Please, provide the data of indicated type";
    if (isNaN(text) || text === "") {
      this.setState({
        ...this.state,
        inputError: { ...this.state.inputError, [inputBox.id]: message },
      });
      this.props.setError({ dimensions: "" });
      inputBox.classList.add("warner");
    } else {
      this.setState(
        {
          ...this.state,
          inputError: { ...this.state.inputError, [inputBox.id]: "" },
        },
        () => {
          if (
            this.state.inputError[this.heightId] === "" &&
            this.state.inputError[this.widthId] === "" &&
            this.state.inputError[this.lengthId] === ""
          ) {
            this.props.setError({});
          } else {
            this.props.setError({ dimensions: "" });
          }
        }
      );
      inputBox.classList.remove("warner");
    }
  };
  render() {
    return (
      <div id="Furniture" className="container">
        <div>
          <label htmlFor="height">
            <p>Height (CM)</p>
            <div className="input-warning">
              <input
                id={this.heightId}
                type="text"
                onChange={this.validate}
                name="height"
              />
              <small className="warning">
                {this.state.inputError[this.heightId]}
              </small>
              <br />
            </div>
          </label>
          <label htmlFor="width">
            <p>Width (CM)</p>
            <div className="input-warning">
              <input
                id={this.widthId}
                type="text"
                onChange={this.validate}
                name="width"
              />
              <small className="warning">
                {this.state.inputError[this.widthId]}
              </small>
              <br />
            </div>
          </label>
          <label htmlFor="length">
            <p>Length (CM)</p>
            <div className="input-warning">
              <input
                id={this.lengthId}
                type="text"
                onChange={this.validate}
                name="length"
              />
              <small className="warning">
                {this.state.inputError[this.lengthId]}
              </small>
              <br />
            </div>
          </label>
        </div>
        <h3>
          Please provide the dimensions (Height, Width and Length) of the
          furniture{" "}
        </h3>
      </div>
    );
  }
}

export default FurnitureForm;
