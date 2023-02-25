import React, { Component } from "react";
import "./css/forms.css";
class BookForm extends Component {
  state = {};
  validate = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;
    const message = text === ""? "Please, submit required data" : "Please, provide the data of indicated type";
    if (isNaN(text) || text === "") {
      this.setState({
        ...this.state,
        inputError: message,
      });
      inputBox.classList.add("warner");
      this.props.setError({...this.props.inputErrors, dimensions: ""})
    } else {
      this.setState({ ...this.state, inputError: "" });
      delete this.props.inputErrors.dimensions;
      this.props.setError(this.props.inputErrors);
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
