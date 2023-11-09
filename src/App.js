import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greetings="BIENVENIDOS A ROLL UP!"/>}/>
        <Route path='/category/:productosId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
