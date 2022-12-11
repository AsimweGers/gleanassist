import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundSellpost;
  let index;

  const onAdd = (sellpost, quantity) => {
    const checkSellpostInCart = cartItems.find(
      (item) => item._id === sellpost._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + sellpost.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkSellpostInCart) {
      const updatedCartItems = cartItems.map((cartSellpost) => {
        if (cartSellpost._id === sellpost._id)
          return {
            ...cartSellpost,
            quantity: cartSellpost.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      sellpost.quantity = quantity;

      setCartItems([...cartItems, { ...sellpost }]);
    }

    toast.success(`${qty} ${sellpost.title} added to the cart.`);
  };

  const onRemove = (sellpost) => {
    foundSellpost = cartItems.find((item) => item._id === sellpost._id);
    const newCartItems = cartItems.filter((item) => item._id !== sellpost._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundSellpost.price * foundSellpost.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundSellpost.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundSellpost = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((sellpost) => sellpost._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundSellpost, quantity: foundSellpost.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundSellpost.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    
    } else if (value === "dec") {
      if (foundSellpost.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundSellpost, quantity: foundSellpost.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundSellpost.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
