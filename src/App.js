import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

function App() {

  const [producto, setProducto] = useState(null);
  const [productos, setProductos] = useState([]);

  //TRAER UN SOLO PRODUCTO DE LA COLECCION.
  useEffect(() => {
    const dataBase = getFirestore();
    //Obtengo referencia de base de datos.
    const productoRef = doc(dataBase, "productos", "H1OtI1WaIO20tnhbNaDv");
    //Asincronía.
    getDoc(productoRef)
    .then((snapshot) => {
      if (snapshot.exists){
        const productoDb = { id: snapshot.id, ...snapshot.data() }
        setProducto(productoDb)
      }
    })
  },[]);
  //

  //TRAER TODOS LOS PRODUCTOS.
  /*
  useEffect(() => {
    const dataBase = getFirestore();
    //Todos
    const productosCollection = collection(dataBase, "productos");
    //Asincronía.
    getDocs(productosCollection)
    .then((snapshot) => {
      if (snapshot.size > 0){
        const productosDb = snapshot.docs.map((producto) => {
          return {id: producto.id, ...producto.data()}
        });
        setProductos(productosDb);
      }
    })
  },[]);
  */

  //TRAER TODOS LOS PRODUCTOS con filtro de Query.
  /*useEffect(() => {
    const dataBase = getFirestore();
    const productosCollection = collection(dataBase, "productos");
    //Query
    const condicion = where ("categoria" , "==" , "bebidas");
    const q = query(productosCollection, condicion);
    //
    getDocs(q)
    .then((snapshot) => {
      if (snapshot.size > 0){
        const productosDb = snapshot.docs.map((producto) => {
          return {id: producto.id, ...producto.data()}
        });
        setProductos(productosDb);
      }
    })
  },[]);

  if (!producto){
    return <div>Loading...</div>;
  }
  */

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
