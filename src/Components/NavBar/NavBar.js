import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <Link to='/'><h3>Roll Up!</h3></Link>
            <div className='categories'>
                <NavLink to={`/category/masPedido`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mas Pedido</NavLink>
                <NavLink to={`/category/muyPronto`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Muy Pronto</NavLink>
                </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;