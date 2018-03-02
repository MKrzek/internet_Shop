import { combineReducers } from "redux";

import {reducer as FormReducer} from 'redux-form';
import AddProducts from './reducer_addProducts.js';
import DisplayProducts from './reducer_displayProducts.js';
import AddToCart from './reducer_addToCart.js';
import Modal from './reducer_modal.js';



const rootReducer=combineReducers({
    form: FormReducer,
    addProducts: AddProducts,
    displayProducts: DisplayProducts,
    cartProducts: AddToCart,
    modal: Modal,
   
  

})
export default rootReducer