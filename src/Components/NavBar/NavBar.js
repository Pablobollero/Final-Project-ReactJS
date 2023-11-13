import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand fs-1">Roll Up!</Link>
            <BurgerMenu />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to={`/productos`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Nuestros Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/category/masPedido`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Mas Pedidos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/category/recomendados`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Recomendados</NavLink>
                    </li>
                    {/* Puedes agregar más elementos de lista aquí si lo necesitas */}
                </ul>
                <div className="ms-auto">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;