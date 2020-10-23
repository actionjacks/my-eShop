const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hel8RLbqPZftEhvgCwCCnA5NFJto9g8Awapf76jNzVJSF3GPRepW0EjlSvKww8NEcUZoDvnadcPuJFL4TQMMQAc00OJZcbdfM"
);
//command for testing firebase backend
//         firebase emulators:start
//  App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//  API routes
app.get("/", (request, response) => response.status(200).send("working"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "pln",
  });

  // cCreated
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
