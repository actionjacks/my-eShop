import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hel8RLbqPZftEhvGUSD6GaUVxNTnqMirfO3fSxCp9tJNA1zmn6Vj8xGhe4Tx1S3BqUjMpfjk1sDlhue0m0FemtX00YEJZFRPJ"
);

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
