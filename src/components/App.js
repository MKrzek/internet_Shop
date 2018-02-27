import React, { Component } from 'react';
import Product from './Product.js';
import AddProducts from './AddProducts.js';
import ProductDisplay from './ProductDisplay.js';

import Navigation from './Navigation.js';
class App extends Component {
  render() {
    return ( <div>
         <Navigation/>
        <div className='mainPart'>
        {/* <AddProducts/> */}
        <ProductDisplay/>
         </div>

        
      </div>
    );
  }
}

export default App;
