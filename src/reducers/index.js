import { combineReducers } from "redux";

import {reducer as FormReducer} from 'redux-form';
import AddProducts from './reducer_addProducts';
import DisplayProducts from './reducer_displayProducts';
const rootReducer=combineReducers({
    form: FormReducer,
    addProducts: AddProducts,
    displayProducts: DisplayProducts,

})
export default rootReducer