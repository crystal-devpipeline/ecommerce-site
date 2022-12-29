import { useContext } from "react"
import { CartContext } from "../../context/CartProvider"

import CartItem from "../CartItem";

export default function Cart({children}) {
    const { cart } = useContext(CartContext)

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
        <div>
          <h1>Your Cart</h1>
          <div>{renderCart()}</div>
          <div>
            Total: ${renderTotal() || "0.00"}
          </div>
        </div>
      );
}