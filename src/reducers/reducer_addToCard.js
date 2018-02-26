import {ADD_TO_CARD} from '../constants.js';
import { DELETE_FROM_CARD } from "../constants.js";
import {UPDATE_PRODUCT_QUANTITY} from '../constants.js';


export default function (state=[], action){
    console.log('quantity update payload', action.payload)

   
    switch (action.type) {
      case ADD_TO_CARD:
        return [...state, action.payload];

      case DELETE_FROM_CARD:
      const key=action.payload
      return state.filter(item=> item.key !==key);

      case UPDATE_PRODUCT_QUANTITY:
      const idNum = action.payload.key
      const update = state.filter(item => item.key !== idNum);
      return [...update, action.payload]
      
      default:
        return state;
    }
    
}