import { Link } from "react-router-dom";

export default function CartItem(props) {
  return(
    <div className="cart-item">
      <Link to={`/products/${props.product.id}`}>
        <div>
          <h4>{props.product.title}</h4>
          <img src={props.product.image} alt="product"/>
          <h3>{props.product.price}</h3>
        </div>
      </Link>
    </div>
  )
}