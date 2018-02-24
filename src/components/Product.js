import React from 'react';
export default class Product extends React.Component{
    render(){
        const {image, product, amount, price} = this.props.product
        return <div className='card'>
                <img src={image} alt='food' style={{height:'200px', width:'200px'}}/>
                 <h2>{product}</h2>
                 <h3>{price}</h3>
                 <h3>{amount}</h3>
                 <button className='btn btn-info'>Add to card</button>
             </div>
    }
}