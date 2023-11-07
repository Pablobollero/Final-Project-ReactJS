import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="text-center">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Roll Up!!"}/>
      <div>
        <ItemDetailContainer />
        <h1>asd</h1>
      </div>
    </div>
  );
};

export default App;
