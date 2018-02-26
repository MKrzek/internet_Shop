import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import CardItem from './CardItem.js';

class Card extends React.Component{
    
    
    deleteFromCard=(key)=>{
        this.props.deleteFromCard(key)
    }
   
  renderCardItem=()=>{
      return this.props.products.map(product=>{
           return <CardItem key={product.key} product={product} deleteFromCard={this.deleteFromCard}/> 
      })
  }
 
  calculateAmount=()=>{
      let amount = 0;
      return this.props.products.map(product => {
        return amount =  Number(product.price) * Number(product.quantity);
        
      });
  }
  

    render(){
        const cardContentLength= this.props.products.length
        const amount=this.calculateAmount()
        const finalAmount=amount.reduce((prev,curr)=>{
            return prev + curr
        },0)
        

        return <div>
                  <h4>{cardContentLength}</h4>
                  <h4>{finalAmount}</h4>
                   {this.renderCardItem()} 
               </div>
    }
}
function mapStateToProps(state){
    console.log('state products', state.cardProducts)
    return{
        products: state.cardProducts,
        
        
        
    }
}
export default connect(mapStateToProps, Actions)(Card);