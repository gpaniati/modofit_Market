
import { useParams } from "react-router-dom";

function FinCompra() {
    const { idOrder } = useParams();
    return (
        <h1>FIN COMPRA: {idOrder}</h1>
    );
}

export default FinCompra;