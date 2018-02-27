import React from 'react';
import SearchBar from './SearchBar.js';
import Card from './Card.js';
export default class Navigation extends React.Component{
    render(){
        return <nav className= ' navbar nav nav-pills'>
                <h1 className=' nav-item pl-5 icon'>Veggy</h1>
                <div className='nav-item'><SearchBar/></div>
                <div className='nav-item pr-3'><Card /></div>

                
                
               </nav>

    }
}