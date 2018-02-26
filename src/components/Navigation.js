import React from 'react';
import SearchBar from './SearchBar.js';
import Card from './Card.js';
export default class Navigation extends React.Component{
    render(){
        return <nav className= 'nav nav-pills nav-justified'>
                <h1 className=' nav-item icon'>Veggy</h1>
                <div className='nav-item'><SearchBar/></div>
                <div className='nav-item'><Card /></div>

                
                
               </nav>

    }
}