import React, { Component } from 'react';
import './css/forms.css'
class FurnitureForm extends Component {
  state = { 

  } 
  heightId = 'height'
  widthId = 'width'
  lengthId = 'length'
  validate = (e) => {
    let states = this.state
    const inputBox = e.target;
    const text = inputBox.value;
    if (isNaN(text)) {
      states[inputBox.id] = 'Kindly enter a valid number';
      this.setState({...states})
      inputBox.classList.add('warner');
    }
    else {
      states[inputBox.id] = '';
      this.setState({...states})
      inputBox.classList.remove('warner');
    }
  }
  render() { 
    return (
      <div id="Furniture" className='container'>
        <form action="#">
          <div>
            <label htmlFor="height">
              <p>Height (CM)</p>
              <input id={this.heightId} type="text" onKeyUp={this.validate} name='height'/>
              <small className="warning">{this.state[this.heightId]}</small><br />
            </label>
            <label htmlFor="width">
            <p>Width (CM)</p>
              <input id={this.widthId} type="text" onKeyUp={this.validate} name='width'/>
              <small className="warning">{this.state[this.widthId]}</small><br />
            </label>
            <label htmlFor="length">
            <p>Length (CM)</p>
              <input id={this.lengthId} type="text" onKeyUp={this.validate} name='length'/>
              <small className="warning">{this.state[this.lengthId]}</small><br />
            </label>
          </div>
          <h3>Please provide the dimensions (Height, Width and Length) of the furniture </h3>
        </form>
      </div>
    );
  }
}
 
export default FurnitureForm;