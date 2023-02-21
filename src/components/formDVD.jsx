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
        inputError: "Kindly enter a valid number",
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
        <form action="#">
          <div>
            <label htmlFor="size">
              <p>Size (MB)</p>
              <input
                id="size"
                onKeyUp={this.validate}
                type="text"
                name="size"
              />
              <small className="warning">{this.state["inputError"]}</small>
              <br />
            </label>
            <h3>
              Please provide the size (capacity) of the DVD in MB (Mega-Bytes)
            </h3>
          </div>
        </form>
      </div>
    );
  }
}

export default DVDForm;
