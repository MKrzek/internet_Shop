import {ADD_TO_CARD} from '../constants.js';

export default function (state=[], action){
    const product= action.payload
    switch(action.type){
        case ADD_TO_CARD:
        return [...state, product];
        default:
        return state
    }
    
}