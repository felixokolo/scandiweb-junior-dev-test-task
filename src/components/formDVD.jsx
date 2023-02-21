import React, { Component } from "react";
import "./css/forms.css";
class DVDForm extends Component {
  state = {
    inputError: "",
  };

  validate = (e) => {
    const inputBox = window.document.getElementById("size");
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
