import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer saludo="Tienda de alimentos naturales" />
      </header>
    </div>
  );
}

export default App;
