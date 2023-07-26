import { useEffect, useState } from "react";
import { getMockUnProductoAsync } from "./mocksDB";
import ItemDetail from "./ItemDetail_1";

function ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getMockUnProductoAsync()
    .then(response => {
      setProducto(response);
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }, [])
  return (
    <div className="justify-content-around text-aling-center">
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer;

