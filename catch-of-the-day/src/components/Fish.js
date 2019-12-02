import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Fish extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // ES6 destructuring variables: details
    // allows to de-structure out a lot of variables quick
    const { image, name, price, desc, status } = this.props.details;

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </li>
    );
  }
}

export default Fish;
