import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import CartItem from './CartItem.js';

class Cart extends React.Component{
    
    
    deleteFromCart=(key)=>{
        this.props.deleteFromCart(key)
    }
   
  renderCartItem=()=>{
      return this.props.products.map(product=>{
           return <CartItem key={product.key} product={product} deleteFromCart={this.deleteFromCart}/> 
      })
  }
 
  calculateAmount=()=>{
      let amount = 0;
      return this.props.products.map(product => {
        return amount =  Number(product.price) * Number(product.quantity);
        
      });
  }
  

    render(){
        const cartContentLength= this.props.products.length
        const amount=this.calculateAmount()
        const finalAmount=amount.reduce((prev,curr)=>{
            return prev + curr
        },0)
        

        return <div className='row'>
            <div className='pr-4 pt-3 col-s-2'>
            <p>No.of items : {cartContentLength}</p>
            <p>Sub Total : {finalAmount}</p>
            </div>
            <div className='col-s-2'>
            <i className="fa fa-shopping-cart fa-4x pt-4"></i>
            </div>
            <div className='card col-lg-12'>
            {this.renderCartItem()}
            </div>
          </div>;
    }
}
function mapStateToProps(state){
    console.log('state products', state.cartProducts)
    return{
        products: state.cartProducts,
        
        
        
    }
}
export default connect(mapStateToProps, Actions)(Cart);