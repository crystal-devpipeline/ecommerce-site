import { Link } from "react-router-dom"

export default function SingleItem(props) {
  return(
    <div>
      <div>
        <h1>{props.product.title}</h1>
        <img src={props.product.image} alt="item"/>
        <h3>${props.product.price}</h3>
        <Link to={`/products/${props.product.id}`}>
          <button>view product</button>
        </Link>
        <button onClick={() => props.addProduct(props.product)}>
          Add to cart
        </button>
      </div>

    </div>
  )
} 