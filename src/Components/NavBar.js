import { Link, NavLink } from "react-router-dom";
import CartContainer from "./CartContainer";
import Brand from "./brand";
import MenuBurger from "./menuBurger";
import CategoryItem from "./CategoryItem";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/'><Brand /></Link>
                <MenuBurger />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to= {'/category/Nuestros Productos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><CategoryItem name="Nuestros Productos" /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to= {'/category/MAS PEDIDOS'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><CategoryItem name="MAS PEDIDOS" /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to= {'/category/Muy Pronto'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><CategoryItem name="Muy Pronto" /></NavLink>
                        </li>
                    </ul>
                </div>
                <CartContainer />
            </div>
        </nav>
    )
}

export default NavBar;