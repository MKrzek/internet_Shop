import * as firebase from 'firebase';

import {ADD_PRODUCT} from '../constants.js';

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
    
}