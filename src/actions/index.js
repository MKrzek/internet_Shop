import * as firebase from 'firebase';

import {ADD_PRODUCT} from '../constants.js';
import {DISPLAY_PRODUCTS} from '../constants.js';
import {UPDATE_STOCK} from '../constants.js';
import {ADD_TO_CART} from '../constants.js';
import {DELETE_FROM_CART} from '../constants.js';
import {UPDATE_PRODUCT_QUANTITY} from '../constants.js';
import  {SEARCH_PRODUCTS} from '../constants.js';
import {OPEN_MODAL, CLOSE_MODAL} from '../constants.js';

const config = {
  apiKey: "AIzaSyCstCGXYbPPdKFgtQxibfKgJMuTw2i6cJ8",
  authDomain: "veggy-shop.firebaseapp.com",
  databaseURL: "https://veggy-shop.firebaseio.com",
  projectId: "veggy-shop",
  storageBucket: "veggy-shop.appspot.com",
  messagingSenderId: "33111054701"
};
const firebaseApp = firebase.initializeApp(config);
const productDatabase=firebase.database().ref('products');
const productImageStorage = firebase.storage().ref('products')

export function addProducts(values){
    
    const {product, category, price, amount, image}=values;
    const id=`${new Date().getTime()}`
    return dispatch=>{
        productImageStorage.child(`images/${id}`).put(image[0])
        .then(snapshot=>{
            productDatabase.push({id, product, category, price, amount, image: snapshot.metadata.downloadURLs[0]
            })
        })
            dispatch({
                type: ADD_PRODUCT,
                payload: values
            
        })
    }
};
export function fetchProducts(){
    return dispatch=>{
        productDatabase.on('value', snapshot=>{
            dispatch({
                type: DISPLAY_PRODUCTS,
                payload: snapshot.val()
            })
        })
    }
}
export function updateStock(newStock, key){
    return dispatch=>{
        productDatabase.child(key).update({
            amount: newStock
        });
        dispatch({
            type: UPDATE_STOCK,
            payload: newStock
        })
    }
}

export function addToCart(product){
    return dispatch=>{
        dispatch({
            type: ADD_TO_CART,
            payload: product
        })
    }
}

export function deleteFromCart(key){
    return dispatch=>{ 
        dispatch({
            type: DELETE_FROM_CART,
            payload: key
        })
    }
}
export function updateProductQuantity(item, update){
    const updateInfo={key: item.key, quantity:update}
    return dispatch=>{ 
        dispatch({
            type: UPDATE_PRODUCT_QUANTITY,
            payload: updateInfo
        })
    }
}
export function searchProducts(product){
   
    console.log('product', product)
   return dispatch=>{
       productDatabase.orderByChild("product").equalTo(product).on("value", snapshot=>{
           
           console.log ('payload', snapshot.val())
           dispatch({
               type: SEARCH_PRODUCTS,
               payload: snapshot.val()
           })
       })

   }
}
export function openModal (product){
    return dispatch=>{
        dispatch({
            type:OPEN_MODAL,
            payload: product
        })
    }
}
export function closeModal(){
    return dispatch=>{
        dispatch({
            type: CLOSE_MODAL
        })
    }
}

