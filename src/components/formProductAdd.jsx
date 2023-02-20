import React, { Component } from 'react';
import './css/forms.css'
import DVDForm from './formDVD';
import FurnitureForm from './formFurniture';
import BookForm from './formBook';
class ProductAdd extends Component {
  state = { 
    selected: 'None'
  } 
  types = {
    None: '',
    DVD: <DVDForm/>,
    Furniture: <FurnitureForm/>,
    Book: <BookForm/>
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

  switcher = (e) => {
    const selectedType = e.target.value
    console.log(selectedType)
    this.setState({...this.state, selected: this.types[selectedType]})
  }
  render() { 
    return (
      <div >
            <div className='container'>
              <label htmlFor="height">
                <p>SKU</p>
                <input id={this.heightId} type="text" onKeyUp={this.validate} name='height'/>
                <small className="warning">{this.state[this.heightId]}</small><br />
              </label>
              <label htmlFor="width">
              <p>Name</p>
                <input id={this.widthId} type="text" onKeyUp={this.validate} name='width'/>
                <small className="warning">{this.state[this.widthId]}</small><br />
              </label>
              <label htmlFor="length">
              <p>Price</p>
                <input id={this.lengthId} type="text" onKeyUp={this.validate} name='length'/>
                <small className="warning">{this.state[this.lengthId]}</small><br />
              </label>
              <label htmlFor="productTypes" >
                <p>Type Switcher</p>
                <select name="productTypes" id="productType" onChange={this.switcher}>
                  <option value="None">....</option>
                  <option value="DVD">DVD</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Book">Book</option>
                </select>
              </label>
            </div>
            <div>
            {this.state['selected']}
          </div>
          </div>
    );
  }
}
 
export default ProductAdd;