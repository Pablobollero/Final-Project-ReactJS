import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <Link to='/'><h3>Roll Up!</h3></Link>
            <div className='categories'>
                <NavLink to={`/productos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nuestros Productos</NavLink>
                <NavLink to={`/category/masPedido`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mas Pedidos</NavLink>
                <NavLink to={`/category/recomendados`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Recomendados</NavLink>
                </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;