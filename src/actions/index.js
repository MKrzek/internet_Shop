import * as firebase from 'firebase';

import {ADD_PRODUCT} from '../constants.js';
import {DISPLAY_PRODUCTS} from '../constants.js';
import {UPDATE_QUANTITY} from '../constants.js';

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
const productImageStorage = firebase.storage().ref('productImage')

export function addProducts(values){
    console.log('action values', values)
    const {product, category, price, amount, image}=values;
    return dispatch=>{
        productImageStorage.child('images').put(image[0])
        .then(snapshot=>{
            productDatabase.push({product, category, price, amount, image: snapshot.metadata.downloadURLs[0]});
            dispatch({
                type: ADD_PRODUCT,
                payload: values
            })
        })
    }
}
export function displayProducts(){
    return dispatch=>{
        productDatabase.on('value', snapshot=>{
            dispatch({
                type: DISPLAY_PRODUCTS,
                payload: snapshot.val()
            })
        })
    }
}
export function updateQuantity(newQuantity, key){
    return dispatch=>{
        productDatabase.child(key).update({
            amount: newQuantity
        });
        dispatch({
            type: UPDATE_QUANTITY,
            payload: newQuantity
        })
    }
}