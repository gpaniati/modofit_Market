import CartContext from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(item, qty) {
    //implementa la funcionalidad para agregar un producto al carrito
  }

  //Funcion para vaciar el carrito.
  function removeList() {
    setCartList([]);
  }

  //Funcion para eliminar producto del carrito.
  function deleteProducto(id) {
    setCartList(cartList.filter((producto) => producto.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ addToCart, removeList, deleteProducto }}
    >
      {children}
    </CartContext.Provider>
  );

}

export default CartProvider;
