import React, { Component } from 'react';
import './css/forms.css'
class FurnitureForm extends Component {
  state = { 
    inputError: {
      height: "Please, submit required data",
      width: "Please, submit required data",
      length: "Please, submit required data",
    }
  } 
  heightId = 'height'
  widthId = 'width'
  lengthId = 'length'
  validate = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;
    const message = text === ""? "Please, submit required data" : "Please, provide the data of indicated type";
    if (isNaN(text) || text === "") {
      this.setState({
        ...this.state,
        inputError: {...this.state.inputError, [inputBox.id]: message},
      });
      inputBox.classList.add("warner");
    } else {
      this.setState({ ...this.state, inputError: "" });
      this.setState({
        ...this.state,
        inputError: {...this.state.inputError, [inputBox.id]: ""},
      }, () => {
        if (this.state.inputError[this.heightId] === "" && 
        this.state.inputError[this.widthId] === "" &&
        this.state.inputError[this.lengthId] === "") {
          delete this.props.inputErrors.dimensions;
      this.props.setError(this.props.inputErrors);
    }
    else {
    this.props.setError({...this.props.inputErrors, dimensions: ""})
    }
      });
      inputBox.classList.remove("warner");
    }
    
  }
  render() { 
    return (
      <div id="Furniture" className='container'>
          <div>
            <label htmlFor="height">
              <p>Height (CM)</p>
              <div className="input-warning">
                <input id={this.heightId} type="text" onKeyUp={this.validate} name='height'/>
              <small className="warning">{this.state[this.heightId]}</small><br />
              </div>
              
            </label>
            <label htmlFor="width">
            <p>Width (CM)</p>
            <div className="input-warning">
              <input id={this.widthId} type="text" onKeyUp={this.validate} name='width'/>
              <small className="warning">{this.state[this.widthId]}</small><br />
            </div>
              
            </label>
            <label htmlFor="length">
            <p>Length (CM)</p>
            <div className="input-warning">
              <input id={this.lengthId} type="text" onKeyUp={this.validate} name='length'/>
              <small className="warning">{this.state[this.lengthId]}</small><br />
            </div>
              
            </label>
          </div>
          <h3>Please provide the dimensions (Height, Width and Length) of the furniture </h3>
      </div>
    );
  }
}
 
export default FurnitureForm;