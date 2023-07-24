import { useEffect, useState } from "react";
import productosDB from  "../data/productos.json";
import ItemList from "./ItemList";

const getMockProductosAsync = new Promise((resolve, reject) => { 
  setTimeout(() => {
    //if (productosDB.length < 10){
    if (productosDB.length === 0){
      reject("Error en la base de productos. Reintente mas tarde");
    }

    resolve(productosDB);
  }, 3000);
});

function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getMockProductosAsync
    .then(response => {
      setProductos(response);
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;
