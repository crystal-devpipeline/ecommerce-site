import { Link } from "react-router-dom"
import "./styles/SingleItem.scss";


export default function SingleItem(props) {
  const { description,title } = props.product;

  function Truncate() {
    function renderTruncatedChild() {
      if (description.length <= 20) {
        return description;
      }
      if (title.length <= 20) {
        return title;
      }

      return (
        description.slice(0, 20) +
        `${description.ellipses ? description.ellipses.repeat(10) : "..."}`
      );
    }

    return renderTruncatedChild();
  }

  return(
    <div className="item-container">
      <div className="item-content">
        <h4>{props.product.title}</h4>
        <img src={props.product.image} alt="item"/>
        <h3>${props.product.price} *{Truncate()}</h3>
        <Link to={`/products/${props.product.id}`}>
          <button className="view-product">view product</button>
        </Link>
        <button className="add" onClick={() => props.addProduct(props.product)}>
          Add to cart
        </button>
      </div>

    </div>
  )
} 