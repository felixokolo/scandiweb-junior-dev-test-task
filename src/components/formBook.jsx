import React, { Component } from "react";
import "./css/forms.css";
class BookForm extends Component {
  state = {};
  validate = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;

    if (isNaN(text)) {
      this.setState({
        ...this.state,
        inputError: "Please, provide the data of indicated type",
      });
      inputBox.classList.add("warner");
    } else {
      this.setState({ ...this.state, inputError: "" });
      inputBox.classList.remove("warner");
    }
  };
  render() {
    return (
      <div id="Book" className="container">
        <label htmlFor="weight">
          <p>Weight (KG)</p>
          <div className="input-warning">
            <input
            id="weight"
            onKeyUp={this.validate}
            type="text"
            name="weight"
          />
          <small className="warning">{this.state["inputError"]}</small>
          </div>
          
          <br />
        </label>
        <h3>Please provide the weight in Kg of the book </h3>
      </div>
    );
  }
}

export default BookForm;
