import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import { getMockProductosAsync } from "./mocksDB";
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";

function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams();
  
  /*
  useEffect(() => {
    getMockProductosAsync()
    .then(response => {
      if ( categoryId ){
        //Filtro los procutos de la categoria seleccionada para filtrarlos del array.
        const productosDeCategoria = response.filter((producto) => producto.categoria === categoryId);
        setProductos(productosDeCategoria);
      }else{
        //Seteo el total de los productos sin filtro.
        setProductos(response);
      }
    }).catch(err => {
      console.log(err);
    });
  }, [categoryId]);
  */

  useEffect(() => {
    const dataBase = getFirestore();
    const productosCollection = collection(dataBase, "productos");
    if (categoryId){
      //Request de los produtos de la base de datos que sean de la categoria seleccionada.
      const condicionCategoria = where ("categoria" , "==" , categoryId);
      const queryCategoria = query(productosCollection, condicionCategoria);
      getDocs(queryCategoria)
      .then((snapshot) => {
        if (snapshot.size > 0){
          const productosDb = snapshot.docs.map((producto) => {
            return {id: producto.id, ...producto.data()}
          });
          setProductos(productosDb);
        }else{
          setProductos([]);
        }
      })
    }else{
      //Request de todos los produtos de la base de datos.
      getDocs(productosCollection)
      .then((snapshot) => {
        if (snapshot.size > 0){
          const productosDb = snapshot.docs.map((producto) => {
            return {id: producto.id, ...producto.data()}
          });
          setProductos(productosDb);
        }else{
          setProductos([]);
        }
      })
    }
  },[categoryId]);

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;
