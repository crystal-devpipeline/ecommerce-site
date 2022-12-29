import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink activeClassName="active-link" to="/">Home</NavLink>
            <NavLink activeClassName="active-link" to="/products">Products</NavLink>
            <NavLink activeClassName="active-link" to="contact">Contact</NavLink>
            <NavLink activeClassName="active-link" to="/about">About</NavLink>
            <NavLink activeClassName="active-link" to="/cart">Cart</NavLink>
        </div>
    )
}