import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export const useDetailProductId = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();
  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((res) => {
        const data = res.data();
        const productAdapted = { id: res.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return { product };
};
