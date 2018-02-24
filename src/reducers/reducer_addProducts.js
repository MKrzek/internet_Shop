import {ADD_PRODUCT} from '../constants.js';
export default function (state=[], action){
    switch(action.type){
        case ADD_PRODUCT:
        return action.payload;
        default:
        return state

    }
}