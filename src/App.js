import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
//import Landing from "./Components/Landing/Landing";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Components/Context/CartContext";
import Cart from "./Components/Cart/Cart";

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
/*
<Route path='/' element={<Landing greeting={'Bienvenidos a '} companyName={'Roll Up!'} about={'Tu pasteleria online.'} queHacemos={'Somos un pequeno emprendimiento familiar avocado a crear los mas fascinantes rolls de canela con los sabores mas particulares que te puedas imaginar.'} />} />
*/