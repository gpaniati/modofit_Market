import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function useGetDocumentById(collectionName, id) {
  const [document, setDocument] = useState(null);

  //Devuelve documento por Id.
  useEffect(() => {
    const dataBase = getFirestore();
    const documentRef = doc(dataBase, collectionName, id);
    
    getDoc(documentRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const documento = {id: snapshot.id, ...snapshot.data()};
        setDocument(documento);
      }
    })
    .catch((error) => console.error(error));
  }, [collectionName, id]);


  return ({document});
}

export default useGetDocumentById;

