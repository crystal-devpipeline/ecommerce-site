import { useContext } from "react"
import { CartContext } from "../../context/CartProvider"

import CartItem from "../CartItem";

export default function Cart() {
    const { cart } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)

    function renderTotal() {
        if (cart.length > 0) {
          return cart.reduce((prev, curr) => prev + curr.price, 0);
        }
    
        return false;
    }

    function renderCart() {
        return cart.map((product) => {
          return <CartItem key={product.id} product={product} />;
        });
    }

    return (
        <div className="cart-container">
          <h1>Your Cart</h1>
          <div>{renderCart()}</div>
          <div>
            <h2>Total: ${renderTotal() || "0.00"}</h2>
          </div>
          <button onClick={clearCart}>
            Clear 
          </button>
        </div>
      );
}