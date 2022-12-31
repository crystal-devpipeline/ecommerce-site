import { useEffect, useState, useContext } from "react"

import SingleItem from "../SingleItem"
import {CartContext} from "../../context/CartProvider"


export default function Products() {
    // setting up a stateful data variable
    const [products, setProducts] = useState([])
    const { addProduct } = useContext(CartContext);

    // will run on every render
    useEffect(() => {
        // the url to get our data
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        // set our data so we can use it
        .then((data) => {
            console.log(data)
            setProducts(data)
        })
        // if there is an error here do this
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
            {/* <h1>Products</h1> */}
            <div className="products">
                {renderProducts}
            </div>
        </div>
    )
}