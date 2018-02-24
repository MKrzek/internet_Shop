import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import FileField from './FileField.js';
import * as Actions from '../actions/index.js';
class AddProducts extends React.Component{
 renderField=field=>{
     const {input, type, label, meta:{error, touched}} = field;
     const className=`form-group${touched && error ? 'has-error': ""}`;
     <fieldset className={className}>
        <div>
         <input type={type} value={...input} label={label}/>
         {touched && error && <div className='alert alert-danger'>{error}</div>}
        </div>
     </fieldset>
 }

 handleSubmit=values=>{
    this.props.addProducts(values)
 }

    render(){
        return <div>
               <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                   <Field
                    name='product'
                    label='Add product'
                    type='text'
                    component={this.renderField}/>
                   <Field
                    name='price'
                    label='Add price'
                    type='text'
                    component={this.renderField}/>
                   <Field
                   name='amount'
                   label='Add amount'
                   type='text'
                   component={this.renderField}/>
                   <Field
                   name='picture'
                   label='Add product image'
                   type='file'
                   component={FileField}/>
                   <button type='submit' className='btn btn-info'>Add a product</button>
               </form>
               </div>
    }
}
function validate(values){
    const errors={};
    if (!values.product){
        errors.name="Please enter a product's name"
    }
    if (!values.price){
        errors.price="Please enter a product's price"
    }
    if (!values.amount){
        errors.amount="Please enter a product's amount"
    }
    if (!values.image){
        errors.image="Please attach a product's image"
    }
    return errors
}
export default connect (null, Actions)(reduxForm({
form: 'addProductsForm',
validate,

})(AddProducts));