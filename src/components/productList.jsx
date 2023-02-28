import React, { Component } from "react";
import Product from "./productItem";
import "./css/productList.css";

class ProductList extends Component {
  state = {
    ...this.props,
    selected: {},
    addSelected: (val) => {
      this.setState(
        {
          ...this.state,
          selected: { ...this.state.selected, [val]: true },
        },
        () => {
          this.props.setSelected(this.state.selected);
        }
      );
    },
    removeSelected: (val) => {
      delete this.state.selected[val];
      this.setState({ ...this.state, selected: this.state.selected }, () => {
        this.props.setSelected(this.state.selected);
      });
    },
  };
  render() {
    if (this.props.list.length === 0) {
      return (
        <div className="product-list">
          <h2>No items</h2>
        </div>
      );
    }
    return (
      <div className="product-list">
        {this.props.list.map((product) => (
          <Product
            {...product}
            key={product.sku}
            addSelected={this.state.addSelected}
            removeSelected={this.state.removeSelected}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
