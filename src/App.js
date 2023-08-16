import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route exact path='/contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
