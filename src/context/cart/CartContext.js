import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartList, setCartList] = useState([]);

  //Funcion para para agregar un producto al carrito.
  function addToCart(producto, cantidad) {
    let newCart;
    let prod = cartList.find((prod) => prod.id === producto.id);
    if (prod){
        prod.cantidad += cantidad;
        newCart = [...cartList]; 
    }else{
        newCart = [...cartList, {...producto, cantidad: cantidad}];
    }
    setCartList(newCart);
  }

  //Funcion para vaciar el carrito.
  function removeList() {
    setCartList([]);
  }

  //Funcion para eliminar producto del carrito.
  function deleteItem(id) {
    setCartList(cartList.filter((producto) => producto.id !== id));
  }
  const contexto = {
    cartList,
    addToCart,
    removeList,
    deleteItem
  }

  return (
    <CartContext.Provider value={contexto}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
