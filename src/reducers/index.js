import { combineReducers } from "redux";

import {reducer as FormReducer} from 'redux-form';
import AddProducts from './reducer_addProducts.js';
import DisplayProducts from './reducer_displayProducts.js';
import AddToCard from './reducer_addToCard.js';

const rootReducer=combineReducers({
    form: FormReducer,
    addProducts: AddProducts,
    displayProducts: DisplayProducts,
    cardProduct: AddToCard,

})
export default rootReducer