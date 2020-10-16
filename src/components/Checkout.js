import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="./checkout_baner.jpg" alt="" className="checkout__ad" />
        <h3 className="checkout__title">
          {user
            ? `Hello ${user.email} your shooping basket`
            : "Your shooping basket"}
        </h3>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
