import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import FileField from './FileField.js';
import * as Actions from '../actions/index.js';
class AddProducts extends React.Component{

 renderField=field=>{
     const {input, type, label, meta:{error, touched}} = field;
     const className=`form-group${touched && error ? 'has-error': ""}`;
     return <fieldset className={className}>
           <div>
             <input type={type} {...input} placeholder={label} className='form-control'/>
            {touched && error && <div className='alert alert-danger'>{error}</div>}
            </div>
         </fieldset>
 }

 renderDropdownList=(field)=>{
     const { input, type, label, meta: { error, touched } } = field;
     const categories =['fruit', 'veg']
     const className = `form-group${touched && error ? "has-error" : ""}`;
     return <fieldset className={className}>
         <div>
           <select {...input} type={type} placeholder={label} className="form-control">
             <option />
             {categories.map(category => {
               return <option value={category} key={category}>
                 {category}
               </option>
             })}
           </select>
           {touched && error && <div className="alert alert-danger">
                 {error}
               </div>}
         </div>
       </fieldset>
 }


 handleSubmit=values=>{
    this.props.addProducts(values)
 }

    render(){
        return <div className='container'>
                <h2>Add a product</h2>
                <div>
               <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                   <Field
                    name='product'
                    label='Add product'
                    type='text'
                    component={this.renderField}/>
                    <Field
                     name='category'
                     label='Choose a category'
                     type='select'
                     component={this.renderDropdownList}/>
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
                   component={FileField}
                   />
                   <button type='submit' className='btn btn-info'>Add a product</button>
               </form>
               </div>
               </div>
    }
}
function validate(values){
    const errors={};
    if (!values.product){
        errors.product="Please enter a product's name"
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
    if (!values.category){
        errors.category = "Please choose a product's category"
    }
    return errors
}
export default connect (null, Actions)(reduxForm({
form: 'addProductsForm',
validate,
})(AddProducts));