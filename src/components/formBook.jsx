import React, { Component } from 'react';
import './css/forms.css'
class BookForm extends Component {
  state = {  }
  validate = (e) => {
    const inputBox = e.target;
    const text = inputBox.value;

    if (isNaN(text)) {
      this.setState({...this.state, inputError: 'Kindly enter a valid number'})
      inputBox.classList.add('warner');
    }
    else {
      this.setState({...this.state, inputError: ''});
      inputBox.classList.remove('warner');
    }
  }
  render() { 
    return (
      <div id="Book" className='container'>
        <form action="#">
          <div>
            <label htmlFor="weight">
              <p>Weight (KG)</p>
              <input id='weight' onKeyUp={this.validate} type="text" name='weight'/>
              <small className="warning">{this.state['inputError']}</small><br />
            </label>
            <h3>Please provide the weight in Kg of the book </h3>
          </div>
        </form>
      </div>
    );
  }
}
 
export default BookForm;