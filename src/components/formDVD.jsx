import React, { Component } from "react";
import "./css/forms.css";
class DVDForm extends Component {
  state = {
    inputError: "",
  };

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
      <div id="DVD" className="container">
          <div>
            <label htmlFor="size">
              <p>Size (MB)</p>
              <div className="input-warning">
                <input
                id="size"
                onKeyUp={this.validate}
                type="text"
                name="size"
              />
              <small className="warning">{this.state["inputError"]}</small>
              </div>
              
              <br />
            </label>
            <h3>
              Please provide the size (capacity) of the DVD in MB (Mega-Bytes)
            </h3>
          </div>
      </div>
    );
  }
}

export default DVDForm;
