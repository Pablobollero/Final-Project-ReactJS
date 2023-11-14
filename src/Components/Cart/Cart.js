import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CarItem/CartItem";
import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    if(cart.length === 0) {
        return (
            <div className="bodyCart">
                <div className="empty">
                    <h1 className="pelado">OPPS!! Parece que tu carrito esta pelado, click abajo para elegir tu antojito!</h1>
                    <Link to='/productos' className="Option btn btn-success btn-sm">Productos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bodyCart">
            <div className="cartConteiner">
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
            <Link to='/checkout' className="Button btn btn btn-sm Checkout">Checkout</Link>
            <button onClick={clearCart} className="Button btn btn btn-sm Limpiar">Limpiar Carrito</button>
            </div>
        </div>
    );
}

export default Cart;