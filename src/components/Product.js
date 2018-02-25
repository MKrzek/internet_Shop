import React from "react";
import {connect} from 'react-redux';
import * as Actions  from '../actions/index.js';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      disabledAdd: false,
      disabledDeduct: false
    };
  }
  addQuantity = () => {
    let quantity = this.state.quantity + 1;
    if (quantity === 20) {
      this.setState({
        disabledAdd: true
      });
    }
    this.setState({
      quantity: quantity
    });
  };

  deductQuantity = () => {
    let quantity = this.state.quantity - 1;
    if (quantity === 0) {
      this.setState({
        disabledDeduct: true
      });
    }
    this.setState({
      quantity: quantity
    });
  };

  addToCard = () => {
      const quantity=this.state.quantity
      const product={...this.props.product, quantity}
      console.log (product)
    this.props.addToCard(product)
  };

  render() {
    const { image, product, amount, price } = this.props.product;

    return (
      <div className="card col-3 mb-4 ml-2">
        <img
          src={image}
          alt="food"
          style={{ height: "15vh", width: "15vw" }}
          className="mx-auto pt-3"
        />
        <h3 className="text-center mt-3">{product}</h3>
        <h4 className="text-center">{price}€</h4>
        {amount === 20 ? (
          <h6 className="text-center">Out of stock</h6>
        ) : (
          <h6 className="text-center">{amount} in stock</h6>
        )}
        <div className="row justify-content-center mt-2">
          <button disabled={this.state.disabledAdd} onClick={this.addQuantity}>
            +
          </button>
          <div className="text-center ml-4 mr-4">{this.state.quantity}</div>
          <button
            disabled={this.state.disabledDeduct}
            onClick={this.deductQuantity}>-</button>
        </div>
        <button onClick={this.addToCard} className="btn btn-info mb-4 mt-2">
          Add to card
        </button>
      </div>
    );
  }
}
export default connect(null, Actions)(Product)
