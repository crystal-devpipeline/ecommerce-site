import { useEffect, useState } from "react";

export default function Product(props) {
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data)
    })
    .catch((err) => {
      console.error("Get product error: ", err)
    })
  }, [props.match.params.id])

  return(
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="product"/>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  )
}