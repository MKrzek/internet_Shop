import { OPEN_MODAL, CLOSE_MODAL } from "../constants.js";
const initialState={
    selectedProduct: null,
    modalIsOpen: false
}
export default function (state = initialState, action){
    switch(action.type){
        case OPEN_MODAL:
        return {
            ...state,
            selectedProduct: action.payload,
            modalIsOpen: true
        }
        case CLOSE_MODAL:
        return {
            ...state,
            selectedProduct: null,
            modalIsOpen: false
        }

        default:
        return state

    }
}