import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMockUnProductoAsync } from "./mocksDB";
import ItemDetail from "./ItemDetail_1";

function ItemDetailContainer() {

  const {id} = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getMockUnProductoAsync(id)
    .then(response => {
      setProducto(response);
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }, [])
  return (
    <div className = "d-flex justify-content-center align-items-center">
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer;

