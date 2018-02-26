import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class SearchBar extends React.Component{
     renderField=field=>{
         const {input, type, label, meta:{error, touched}} = field
         return <fieldset className={` form-group${touched && error ? "has-error" : ""}`}>
        <div className='searchBar'>
          <div className='searchInput'>
            <input
              {...input}
              type={type}
              placeholder={label}
              className=" form-control text-lowercase"
            />
            <button type="submit" className="btn bmd-btn-icon">
              <i className="material-icons">search</i>
            </button>
          </div>
          <div>
            {touched &&
              error && <div className="alert alert-danger">{error} </div>}
          </div>
        </div>
        </fieldset>
     }
     handleSubmit=(values)=>{
         this.props.performSearch(values)
     }
     
    render(){
        return <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <Field
                  name='query'
                  type='text'
                  label='Search for Vegetables and Fruit'
                  component={this.renderField}/>
               </form>
    }
}
function validate(values){
    const products=['Avocado', "Bananas", "Kiwi", 'Strawberries', "Watermelon", 'Pears', 'Apples', 'Beans', 'Beetroot', 'Blueberries', 'Cabbage', 'Carrots', 'Chilli','Eggplant', 'Mushrooms', "Onions", 'Peppers', 'Plum', 'Potatoes', 'Pumpkin', 'Raspberries', 'Tangerines', 'Tomatoes']
    const errors={};
    if (!values.query){
        errors.query='Enter a search term'
    }
    if (!products.includes(values.query)){
        errors.query='Please enter a valid search name'
    }
}
export default connect(null, Actions)(reduxForm({
    form: 'SearchBar',
    validate
}) (SearchBar))