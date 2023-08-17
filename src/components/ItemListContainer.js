import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import useGetDocumentsByCategory from "../hooks/useGetDocumentsByCategory";
import imagen from "../images/cargando.gif";
//Sacar
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
//Sacar

function ItemListContainer() {

  const dbName = "productos";
  const { categoryId } = useParams();
  const { cartList } = useContext(CartContext);

  //Hook.
  const { documents: productos } = useGetDocumentsByCategory( dbName, categoryId );

  if (productos.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <img src={imagen} alt="Cargando..."></img>
      </div>
    );
  }

//Sacar
//  console.log("Idiota");
//Sacar

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;