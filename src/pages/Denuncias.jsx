import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import DenunciaCard from "../components/DenunciaCard";

export default function Denuncias() {
  const { useFirestore } = useContext(DataContext);
  const { docs } = useFirestore("denuncias");

  const [search, setSearch] = React.useState("");

  const filteredFunc = (docs, search) =>
    docs.filter(
      (doc) =>
        doc.denounced.toLowerCase().includes(search.toLowerCase()) ||
        doc.desc.toLowerCase().includes(search.toLowerCase()) ||
        doc.id.toLowerCase().includes(search.toLowerCase())
    );

  const filtered = docs && filteredFunc(docs, search);

  return (
    <div
      id="denuncias"
      className="min-h-screen items-start justify-center bg-black"
    >
      <h1 className="text-2xl text-white text-center font-title">Denuncias</h1>
      <div class="pt-2 relative mx-auto text-gray-300">
        <input
          class="border-2 border-gray-300 white-glassmorphism h-8 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filtered &&
        filtered.map((denuncia) => (
          <DenunciaCard denuncia={denuncia} key={denuncia.id} />
        ))}
    </div>
  );
}
