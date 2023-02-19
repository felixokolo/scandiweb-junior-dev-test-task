import React, { Component } from "react";
class DVDForm extends Component {
  state = {};
  render() {
    return (
      <div id="DVD">
        <form action="#">
          <div>
            <label htmlFor="size">
              <input type="text" name="size" />
            </label>
            <p>
              Please provide the size (capacity) of the DVD in MB (Mega-Bytes)
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default DVDForm;
