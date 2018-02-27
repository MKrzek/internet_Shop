import React from 'react';
import SearchBar from './SearchBar.js';
import Cart from './Cart.js';
export default class Navigation extends React.Component{
    render(){
        return <nav className= 'navbar nav-pills nav-fill'>
                <p className=' nav-item  icon'>Veggy</p>
                <div className='nav-item'><SearchBar/></div>
                <div className='nav-item'><Cart /></div>

                
                
               </nav>

    }
}