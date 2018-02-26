import React from "react";
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class CardItem extends React.Component {
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
      
      this.props.deleteFromCard(key)
  }

  render() {
    const { image, product, price} = this.props.product;
    return (
      <div>
        <div className="card col-md-3 mb-4 mr-2 ml-2">
          <img
            src={image}
            alt="food"
            style={{ height: "10vh", width: "12vw" }}
            className="mx-auto pt-5"
          />
          <h3 className="text-center  ml-3 mr-3 mt-3">{product}</h3>
          <h4 className="text-center">{price}€</h4>
          <div className="row justify-content-center mt-2">
            <button
              disabled={this.state.disabledAdd}
              onClick={this.addQuantity}
            >
              +
            </button>
            <div className="text-center ml-4 mr-4">{this.state.quantity}</div>
            <button
              disabled={this.state.disabledDeduct}
              onClick={this.deductQuantity}
            >
              -
            </button>
          </div>
          <button onClick={this.handleClick}>X</button>
        </div>
      </div>
    );
  }
}
export default connect(null, Actions)(CardItem);
