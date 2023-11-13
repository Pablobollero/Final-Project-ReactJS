import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Components/Context/CartContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";


function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Landing greeting={'Bienvenidos a '} companyName={'Roll Up!'} about={'Tu pasteleria online.'} queHacemos={'Nuestra panadería familiar se distingue por elaborar rolls de canela excepcionales, combinando ingredientes de alta calidad con una audaz exploración de sabores, desde florales hasta picantes. Más que un simple establecimiento, es un lugar de encuentro comunitario, donde cada roll es una invitación a crear recuerdos y disfrutar de experiencias culinarias únicas, atrayendo a amantes de los dulces de todas partes.'} />} />
            <Route path='/productos' element={<ItemListContainer title={'Nuestros Productos'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;