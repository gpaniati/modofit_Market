import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartList, setCartList] = useState([]);

  //Funcion para para agregar un producto al carrito.
  function addToCart(producto, cantidad) {
    let newCart;
    let prod = cartList.find((prod) => prod.id === producto.id);
    if (prod){
        //console.log("Encontro");
        prod.cantidad += cantidad;
        newCart = [...cartList];
        //console.log(newCart);
    }else{
        //console.log("NO Encontro");
        //console.log("Cart Viejo");
        //console.log(cartList);
        newCart = [...cartList, {...producto, cantidad: cantidad}];
        //console.log("Cart Nuevo");
        //console.log(newCart);
    }
    setCartList(newCart);
    //console.log("Cart Actualizado");
    //console.log(cartList);
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
