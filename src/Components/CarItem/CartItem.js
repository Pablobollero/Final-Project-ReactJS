import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import "./CartItem.css";

function CartItem({ id, name, price, quantity }) {
    const { removeItem } = useContext(CartContext);
    const subtotal = price * quantity;

    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <p>Precio unitario: ${price}</p>
            <p>Cantidad: {quantity}</p> 
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <button onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    );
}

export default CartItem;
