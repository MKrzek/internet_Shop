import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import CartItem from './CartItem.js';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            renderCartContent: false,
        }
    }
    
    
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

  showCartContent=()=>{
      if (this.state.renderCartContent){
          this.setState({
              renderCartContent: false
          })
      }else{
     this.setState({
        renderCartContent: true
    })
  }
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
            <div onClick={this.showCartContent} className='col-s-2'>
            <i className="fa fa-shopping-cart fa-4x pt-4"></i>
            </div>
            {this.state.renderCartContent ? (<div className='card col-lg-12 cartContent'>
            {this.renderCartItem()}
            {this.props.products.length>0 ? (<button className='btn btn-warning'>Proceed to Checkouts</button>) : null}
            </div>) : null}
          </div>
    }
}
function mapStateToProps(state){
    console.log('state products', state.cartProducts)
    return{
        products: state.cartProducts,
        
        
        
    }
}
export default connect(mapStateToProps, Actions)(Cart);