import React, { Component } from 'react';
class FurnitureForm extends Component {
  state = {  } 
  render() { 
    return (
      <div id="Furniture">
        <form action="#">
          <div>
            <label htmlFor="height">
              <input type="text" name='height'/>
            </label>
            <label htmlFor="width">
              <input type="text" name='width'/>
            </label>
            <label htmlFor="length">
              <input type="text" name='length'/>
            </label>
            <p>Please provide the dimensions (Height, Width and Length) of the furniture </p>
          </div>
        </form>
      </div>
    );
  }
}
 
export default FurnitureForm;