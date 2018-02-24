import React from 'react';
export default class Product extends React.Component{
    render(){
        return <div className='card'>
                <img src={require('../images/apple.jpg')} alt='food'/>
                 <h2>Apples - 1kg</h2>
                 <h3>£1</h3>
                 <button className='btn btn-info'>Add to card</button>
             </div>
    }
}