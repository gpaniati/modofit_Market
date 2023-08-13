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
    }).catch(err => {
      console.log(err);
    });
  }, [id])

  return (
    <div className = "d-flex justify-content-center align-items-center mt-5 mb-5">
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer;

