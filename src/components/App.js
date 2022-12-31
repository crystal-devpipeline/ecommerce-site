import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/App.scss"
import Navbar from "./navigation/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Footer from "./navigation/Footer";
import Product from "./pages/Product";
import CartProvider from "../context/CartProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Route component={Navbar}/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route path ="/products/:id" component={Product}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
