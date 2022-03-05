import React, { useState, useEffect } from "react";
import { pFirestore } from "../firebase/firebaseConfig";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {

  const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      const unsub = pFirestore
        .collection(collection)
        .onSnapshot((snapshot) => {
          let documents = [];
          snapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
          console.log(documents);
        });

      return () => unsub();
    }, [collection]);

    return { docs };
  };

  return (
    <DataContext.Provider
      value={{
        useFirestore
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

