const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors')({origin: true});
admin.initializeApp();

const app = express();
app.use(cors);

const db = admin.firestore();
app.post('', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var from = req.body.from;
    var quer = req.body.msg;
    db.collection('Messages').doc(from).set({
        "Name" : name,
        "Email": email,
        "From":from,
        "Mes" : quer
    }).then((val)=>{
        res.status(200).send("Done");
    }).catch((err)=>{
       res.status(500).send("Error"); 
    });
})

exports.newQuery = functions.https.onRequest(app);

