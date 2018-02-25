import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import CardItem from './CardItem.js';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            finalAmount:0,
            productNumber: 0
        }
    }

    deleteFromCard=(key)=>{
        console.log('delete button in card works')
        this.props.deleteFromCard(key)
    }
   
  renderCardItem=()=>{
      console.log(this.props.products)
      return this.props.products.map(product=>{
           return <CardItem key={product.key} product={product} deleteFromCard={this.deleteFromCard}/> 
      })
  }

    render(){
        return <div>
                    {this.renderCardItem()}
               </div>
    }
}
function mapStateToProps(state){
    
    return{
        products: state.cardProducts
    }
}
export default connect(mapStateToProps, Actions)(Card);