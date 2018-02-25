import {ADD_TO_CARD} from '../constants.js';
import { DELETE_FROM_CARD } from "../constants.js";
export default function (state=[], action){
    const product = action.payload
    console.log('product reducer', product)
    switch (action.type) {
      case ADD_TO_CARD:
        return [...state, product];
      case DELETE_FROM_CARD:
      const key=action.payload
      return state.filter(item=> item.key !==key)
      default:
        return state;
    }
    
}