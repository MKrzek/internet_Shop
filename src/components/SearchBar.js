import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class SearchBar extends React.Component{
     renderField=field=>{
         const {input, type, label, meta:{error, touched}} = field
         console.log('input', input.value)
         return <fieldset className={` form-group${touched && error ? "has-error" : ""}`}>
             <div className="form-inline my-2 my-lg-0">
               <div>
                 <input {...input} type={type} placeholder={label} className="searchInput mr-lg-2   text-capitalize" />

                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                   search
                 </button>
               </div>
               <div>
                 {touched &&
                   error && (
                     <div className="alert alert-danger">{error} </div>
                   )}
               </div>
             </div>
           </fieldset>;
     }
     handleSubmit=(values)=>{
         
         const query=values.query
         console.log("values", query);
        let product = query.charAt(0).toUpperCase() + query.slice(1);
         this.props.searchProducts(product)
         values.query='';
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