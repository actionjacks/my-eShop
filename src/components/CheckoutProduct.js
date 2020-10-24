import React from "react";
import "../styles/CheckoutProduct.css";
import StarsIcon from "@material-ui/icons/Stars";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkout__price">
          <small>PLN </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarsIcon />
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
