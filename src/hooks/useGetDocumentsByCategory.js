import { useEffect, useState } from "react";
import { where, query, collection, getDocs, getFirestore } from "firebase/firestore";

function useGetDocumentsByCategory(collectionName, categoryId) {
  
  const [documents, setDocuments] = useState([]);

  //Devuelve documentos por categoria.
  useEffect(() => {
    const dataBase = getFirestore();
    const documentsCollection = collection(dataBase, collectionName);
    
    if (categoryId){
      //Request de los documentos de la base de datos que sean de la categoria seleccionada.
      const condicionCategoria = where ("categoria" , "==" , categoryId);
      const queryCategoria = query(documentsCollection, condicionCategoria);

      getDocs(queryCategoria)
      .then((snapshot) => {
        if (snapshot.size > 0){
          const documentos = snapshot.docs.map((documento) => {
            return {id: documento.id, ...documento.data()}
          });
          setDocuments(documentos);
        }else{
          setDocuments([]);
        }
      })
      .catch((error) => console.error(error));
    }else{
      //Request de todos los documentos de la base de datos.

      getDocs(documentsCollection)
      .then((snapshot) => {
        if (snapshot.size > 0){
          const documentos = snapshot.docs.map((documento) => {
            return {id: documento.id, ...documento.data()}
          });
          setDocuments(documentos);
        }else{
          setDocuments([]);
        }
      })
      .catch((error) => console.error(error));
    }
  }, [collectionName, categoryId]);

  return ({documents});
}

export default useGetDocumentsByCategory;
