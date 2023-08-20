
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail_1";
import useGetDocumentById from "../../hooks/useGetDocumentById";
import cargando from "../images/cargando.gif"

function ItemDetailContainer() {
  
  const dbName = "productos";
  const { id } = useParams();

  //Hook.
  const { document: producto } = useGetDocumentById( dbName, id );

  if (!producto) {
    return (
      <div className="d-flex justify-content-center">
        <img src={cargando} alt="Cargando..."></img>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;