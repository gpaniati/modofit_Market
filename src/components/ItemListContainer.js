import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getMockProductosAsync } from "./mocksDB";

function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams();

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

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;
