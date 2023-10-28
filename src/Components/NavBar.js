import CartContainer from "./CartContainer";
import CategoryItem from "./CategoryItem";
import Brand from "./brand";
import MenuBurger from "./menuBurger";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Brand />
                <MenuBurger />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CategoryItem isActive={false} name="Nuestros Productos" />
                        </li>
                        <li className="nav-item">
                            <CategoryItem isActive={true} name="MAS PEDIDOS" />
                        </li>
                        <li className="nav-item">
                            <CategoryItem isActive={false} name="Muy Pronto" />
                        </li>
                    </ul>
                </div>
                <CartContainer />
            </div>
        </nav>
    )
}

export default NavBar;