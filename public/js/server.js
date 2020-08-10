const firebase = require('firebase-admin')
firebase.initializeApp()
const functions = firebase.functions;

function getCatelog(params) {
   functions.httpsCallable('getCatelog').then((res, err) => {

   })
}