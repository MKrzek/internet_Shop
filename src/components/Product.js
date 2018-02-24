import React from 'react';
import QuantityCounter from './QuantityCounter.js'
export default class Product extends React.Component{
   
    render(){
        const {image, product, amount, price} = this.props.product
        
        return <div className='card col-3 mb-4 ml-2'>
                <img src={image} alt='food' style={{height:'15vh', width:'15vw'}} className='mx-auto pt-3'/>
                 <h3 className='text-center mt-3'>{product}</h3>
                 <h4 className='text-center'>{price}€</h4>
                 {amount === 20 ? (<h6 className='text-center'>Out of stock</h6>) :(<h6 className='text-center'>{amount} in stock</h6>)}
                 {amount < 20 ? null : <QuantityCounter/>}
                 <button className='btn btn-info mb-4'>Add to card</button>
             </div>
    }
}