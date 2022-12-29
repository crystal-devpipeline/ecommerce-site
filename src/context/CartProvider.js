import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }


  const cartState = {
    cart,
    addProduct,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}