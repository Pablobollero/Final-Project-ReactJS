import './App.css';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="text-center">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Roll Up!!"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </div>
  );
};

export default App;
