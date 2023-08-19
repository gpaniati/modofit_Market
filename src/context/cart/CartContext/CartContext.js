import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  //Array con productos del carrito.
  const [cartList, setCartList] = useState([]);
  //Cantidad de productos en carrito.
  const [totalProductos, setTotalProductos] = useState(0);
  //Precio total de los productos delcarrito ;
  const [precioTotal, setPrecioTotal] = useState(0);

  //Hook que detecta la incorporacion de producto y recalcula precio total de compra.
  useEffect(() => {
    setPrecioTotal(handlePrecioTotal())
  }, [cartList]);

  //funcion para calcular el precio total del carrito. 
  function handlePrecioTotal() {
    const cartAuxiliar = (handlePrecioTotalByProducto());
    const valorInicial = 0;
    return cartAuxiliar.reduce((acumulador, producto) => acumulador + producto.precioTotalByProdcuto, valorInicial);
  }

  //Funcion para retorna un carrito con item y su total de acuerdo a la cantidad). 
  function handlePrecioTotalByProducto() {
    return cartList.map((producto) => ({...producto, precioTotalByProdcuto: (producto.cantidad * producto.precio)}));
  }

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
    setTotalProductos(totalProductos + cantidad);
  }

  //Funcion para vaciar el carrito.
  function removeList() {
    setCartList([]);
    setTotalProductos(0);
  }

  //Funcion para eliminar producto del carrito.
  function deleteItem(id) {
    const itemDelete = cartList.find((producto) => producto.id === id );
    setCartList(cartList.filter((producto) => producto.id !== id));
    if (itemDelete){
      setTotalProductos(totalProductos - itemDelete.cantidad);
    }
  }

  const contexto = {
    cartList,
    totalProductos,
    precioTotal,
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