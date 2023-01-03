import { useEffect, useState, useContext } from "react"

import SingleItem from "../SingleItem"
import {CartContext} from "../../context/CartProvider"


export default function Products() {
    const [products, setProducts] = useState([])
    const { addProduct } = useContext(CartContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProducts(data)
        })
        .catch((err) => {
            console.error("Get products error: ", err)
        })
    }, [])

    const renderProducts = products.map((product) => {
        return (
            <SingleItem key={product.id} product={product} addProduct={addProduct} />
        )
    })

    return (
        <div className="products-container">
            <div className="products">
                {renderProducts}
            </div>
        </div>
    )
}