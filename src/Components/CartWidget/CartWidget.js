import { useContext } from 'react';
import cart from './Assets/cart.svg';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import "./CartWidget.css";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cart} className='CartImg' alt="Icono del Carrito" />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget;