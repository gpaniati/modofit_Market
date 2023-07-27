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
      setProductos(response);
      console.log(categoryId);
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
