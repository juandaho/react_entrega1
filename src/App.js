import "./components/NavBar/NavBar";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <ItemListContainer titulo={"Bienvenidos a nuestra página"} />
      <NavBar />
      
    </div>
  );
}

export default App;
