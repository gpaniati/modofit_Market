import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useGetDocumentsByCategory from "../../hooks/useGetDocumentsByCategory";
import imagen from "../../images/cargando.gif";

function ItemListContainer() {

  const dbName = "productos";
  const { categoryId } = useParams();

  //Hook.
  const { documents: productos } = useGetDocumentsByCategory( dbName, categoryId );

  if (productos.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <img src={imagen} alt="Cargando..."></img>
      </div>
    );
  }

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;