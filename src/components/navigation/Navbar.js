import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        </div>
    )
}
