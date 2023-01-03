import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }

  function clearCart(){
    setCart([]);
  }

  const cartState = {
    cart,
    addProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}
