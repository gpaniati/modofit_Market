import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import CartItems from "./CartItems";

function Cart() {
  const { cartList } = useContext(CartContext);

  function handleItemDelete(){
    console.log("Borro Producto");
  }

  return (
    <div>
      {cartList.map((producto) => (
        <CartItems key={producto.id} item={producto} itemDelete={handleItemDelete} />
      ))}
    </div>
  );
}

export default Cart;
