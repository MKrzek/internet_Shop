import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import CardItem from './CardItem.js';

class Card extends React.Component{
    
    
    deleteFromCard=(key)=>{
        this.props.deleteFromCard(key)
    }
   
  renderCardItem=()=>{
      let amount=0
      return this.props.products.map(product=>{
          console.log('quantity', product.quantity)
          console.log('price', product.price)
          amount = amount + (Number(product.price)*Number(product.quantity))
          console.log('amount', amount)
           return <CardItem key={product.key} product={product} deleteFromCard={this.deleteFromCard}/> 
      })
  }
 
  calculateAmount=()=>{
      let amount = 0;
      return this.props.products.map(product => {
        console.log("quantity", product.quantity);
        console.log("price", product.price);
        return amount = amount + Number(product.price) * Number(product.quantity);
        
      });
  }
  

    render(){
        const amount=this.calculateAmount()
        return <div>
                  <h4>{this.props.cardContentLength}</h4>
                  <h4>{amount}</h4>
                   {this.renderCardItem()} 
               </div>
    }
}
function mapStateToProps(state){
    
    return{
        products: state.cardProducts,
        cardContentLength: state.cardProducts.length,
        finalAmount: state.finalAmount
        
    }
}
export default connect(mapStateToProps, Actions)(Card);