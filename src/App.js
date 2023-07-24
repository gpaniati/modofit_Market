
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/home";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer />
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
<div className="App">
<header className="App-header">
  <NavBar />
  <ItemListContainer saludo="Tienda de alimentos naturales"/>
</header>
</div>

*/
