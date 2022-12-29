import { Link } from "react-router-dom";

export default function CartItem(props) {
  return(
    <div>
      <Link to={`/products/${props.product.id}`}>
        <div>
          <h1>{props.product.title}</h1>
          <img src={props.product.image} alt="product"/>
          <h3>{props.product.price}</h3>
        </div>
      </Link>
    </div>
  )
}