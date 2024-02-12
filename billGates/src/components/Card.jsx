import React, { useState } from "react";
import items from "../Items";

const Card = () => {
  items.map((item) => {
    const [quantity, setQuantity] = useState(0);

    function buyItem() {
      setQuantity(quantity + 1);
      item.quantity += 1;
    }

    function sellItem() {
      if (quantity > 0) {
        setQuantity(quantity - 1);
        item.quantity -= 1;
      }
    }

    return(
        <div className="card" key = {item.title}>
            <img src = {item.image} alt = {item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>

            <div className = "button-container">
                <button className = "button" onClick={sellItem}>Sell</button>
                <input className = "quantity" type="text" value={quantity}></input>
                <button className = "button" onClick={buyItem}>Buy</button>
            </div>
        </div>
    )
  });
};

export default Card;
