import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext/CartContext";
import { Link } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
import "../Cart/Cart.css";

function Cart() {
  const { cartList, removeList, deleteItem, precioTotal } =
    useContext(CartContext);

  function handleItemDelete(producto) {
    deleteItem(producto);
  }

  function handleRemoveList() {
    removeList();
  }

  if (cartList.length === 0) {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Mi Carrito</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>No hay productos en tu carrito de compras.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button as={Link} to="/" variant="success">
              IR A COMPRAR
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

  return (
    <div>
      <div>
        {cartList.map((producto) => (
          <CartItems
            key={producto.id}
            item={producto}
            itemDelete={handleItemDelete}
          />
        ))}
      </div>
      <h3 className="d-flex flex-row justify-content-center">
        Total de compra: ${precioTotal}
      </h3>
      <div className="d-flex flex-row justify-content-center cartFooter">
        <Button variant="danger" size="sm" onClick={handleRemoveList}>
          Limpiar Carrito
        </Button>
      </div>
      <div className="d-flex flex-row justify-content-center cartFooter">
        <Button as={Link} to="/formulario" variant="success" size="sm">
          FINALIZAR COMPRA
        </Button>
      </div>
    </div>
  );
}

export default Cart;