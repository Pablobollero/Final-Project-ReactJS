import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <h2>Roll Up!</h2>
            <div>
                <button>Nuestros Productos</button>
                <button>Mas Pedidos</button>
                <button>Proximamente!</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;