const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MA6P7SIdz2j5vhyxSmh1CVPHcDsmAQptG7EeMdDC5LGlADnBOacAhvdbfp0vCIu8OCgF7TLBm52zEBgogbfOCHH00VZsk6m7I')

// api

// app config for backend
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get('/orders', (request, response)=>response.status(200).send('hello world'))

app.post('/payments/create', async(request, response)=> {
    const total = request.query.total;

    console.log('payment request received for amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency 
        currency: "usd",
    });

    // ok - 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// listen command
exports.api = functions.https.onRequest(app)

// example endpoint
//http://127.0.0.1:5001/challenge-25608/us-central1/api