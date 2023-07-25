import productosDB from "../data/productos.json";

function getMockProductosAsync() {
  const promesaProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      //if (productosDB.length < 10){
      if (productosDB.length === 0) {
        reject("Error en la base de productos. Reintente mas tarde");
      }

      resolve(productosDB);
    }, 3000);
  });

  return promesaProductos;
}

export default getMockProductosAsync;
