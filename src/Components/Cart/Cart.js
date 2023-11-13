import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CarItem/CartItem";
import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    if(cart.length === 0) {
        return (
            <div className="empty">
                <h1>No hay Items en el carrito!!</h1>
                <Link to='/' className="Option btn btn-success btn-sm">Productos</Link>
            </div>
        );
    }

    return (
        <div className="cartConteiner">
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
            <button onClick={clearCart} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className="Option btn btn-success btn-sm">Checkout</Link>
        </div>
    );
}

export default Cart;