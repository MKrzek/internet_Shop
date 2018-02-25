import { DISPLAY_PRODUCTS } from "../constants.js";
export default function(state = [], action) {
  
  switch (action.type) {
    case DISPLAY_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
