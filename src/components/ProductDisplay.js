import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as Actions from '../actions/index.js';
import Product from './Product.js';

class ProductDisplay extends React.Component {
  componentDidMount=()=>{
    this.props.fetchProducts();
  }

  displayProducts=()=>{
      if (this.props.products) {
        for (const key of Object.keys(this.props.products)) {
          this.props.products[key].key = key;
        }
      }
      
     return _.map(this.props.products, product=>{
         console.log('product', product)
         return  <Product key={product.key} product={product}/>
             })
     
  }

  render() {
    return <div className='container'>
            <div className='row'>
             {this.displayProducts()}
             </div>
           </div>
  }
}
function mapStateToProps(state){
    console.log('state', state.displayProducts)
    return {products: state.displayProducts}
}
export default connect (mapStateToProps, Actions) (ProductDisplay)