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
         
         return  <Product key={product.key} product={product}/>
             })
     
  }

  render() {
    return <div className='container'>
            <div className='justify-content-center row'>
             {this.displayProducts()}
             </div>
           </div>
  }
}
function mapStateToProps(state){
    
    return {products: state.displayProducts}
}
export default connect (mapStateToProps, Actions) (ProductDisplay)