import {ADD_TO_CART} from '../constants.js';
import { DELETE_FROM_CART } from "../constants.js";
import {UPDATE_PRODUCT_QUANTITY} from '../constants.js';

export default function (state=[], action){
    switch (action.type) {
      
      case ADD_TO_CART:
        return [...state, action.payload];

      case DELETE_FROM_CART:
      const key=action.payload
      return state.filter(item=> item.key !==key);

      case UPDATE_PRODUCT_QUANTITY:
      const data = state.map(product=>{
        if (action.payload.key ===product.key){
           product.quantity=action.payload.quantity 
        }
        return state
      })
      console.log('data', data)
      const update=Object.values(data[0])
      console.log ('xxx', update)
      return update;
      
      default:
        return state;
    }
    
}