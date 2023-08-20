import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Voucher() {

  const { idOrder } = useParams();

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Comprobante de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Su compra fue registrada con exito!!!</h5>
        </Modal.Body>
        <Modal.Body>
            <p>Número de orden: {idOrder}</p>
        </Modal.Body>
        <Modal.Footer> 
          <Button as={Link} to="/" variant="success">
            SEGUIR COMPRANDO
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Voucher;