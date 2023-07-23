import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer saludo="Tienda de alimentos naturales"/>
      </header>
    </div>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
