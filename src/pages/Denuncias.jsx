import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import DenunciaCard from "../components/DenunciaCard";

export default function Denuncias() {
  const { useFirestore } = useContext(DataContext);
  const { docs } = useFirestore("denuncias");

  return (
    <div
      id="denuncias"
      className="min-h-screen items-start justify-center bg-black"
    >
      <h1 className="text-2xl text-white text-center font-title">Denuncias</h1>
      {docs && docs.map((denuncia) => <DenunciaCard denuncia={denuncia} />)}
    </div>
  );
}
