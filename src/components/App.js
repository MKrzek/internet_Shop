import React, { Component } from 'react';
import Product from './Product.js';
import AddProducts from './AddProducts.js';
import ProductDisplay from './ProductDisplay.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddProducts/>
        {/* <ProductDisplay/> */}

        
      </div>
    );
  }
}

export default App;
