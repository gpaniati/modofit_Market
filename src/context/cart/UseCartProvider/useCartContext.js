import { useContext } from "react";
import CartContext from "../CartContext/CartContext";

const useCartContext = () => {
  const contexto = useContext(CartContext);

  return contexto;
}

export default useCartContext;