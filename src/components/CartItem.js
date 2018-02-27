import React from "react";
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: this.props.product.quantity };
  }

  addQuantity = () => {
    let quantity = this.state.quantity + 1;
    if (quantity === 20) {
      this.setState({ disabledAdd: true });
    }
    this.setState({ quantity: quantity });
    
   this.props.updateProductQuantity(this.props.product, this.state.quantity+1)
   
  };

  deductQuantity = () => {
    let quantity = this.state.quantity - 1;
    if (quantity === 0) {
      this.setState({ disabledDeduct: true });
    }
    this.setState({ quantity: quantity });
    this.props.updateProductQuantity(this.props.product, this.state.quantity -1);
  };


  handleClick=()=>{
      const key=this.props.product.key
      
      this.props.deleteFromCart(key)
  }

  render() {
    const { image, product, price} = this.props.product;
    console.log ('image', image)
    return <div className="cartProduct card mb-4 mr-2 ml-2">
        <div className="row">
          <img src={image} alt="food" style={{ height: "6vh", width: "7vw" }} className=" pt-2 pb-2 pl-5" />
          <p className="text-center mt-3 pl-3 pr-3 cartProductPrice">
            {product} - {price}€
          </p>

          <div className="row justify-content-center pt-2 pb-2 cartQuantityButtons">
            <button disabled={this.state.disabledAdd} onClick={this.addQuantity} className="btn btn-outline-success mx-auto">
              +
            </button>
            <div className="text-center ml-4 mr-4">
              {this.state.quantity}
            </div>
            <button disabled={this.state.disabledDeduct} onClick={this.deductQuantity} className="btn btn-outline-success mx-auto">
              -
            </button>
          </div>
          <button className=" btn btn-outline-warning cartDeleteButton" onClick={this.handleClick}>
            X
          </button>
        </div>
      </div>;
  }
}
export default connect(null, Actions)(CartItem);
