import React from "react";

export default function DenunciaCard({ denuncia }) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-xl white-glassmorphism p-2 m-2 text-white">
      <h1 className="font-title text-2xl">{denuncia.denounced}</h1>
      <p>{denuncia.desc}</p>
      <p>{denuncia.id}</p>
    </div>
  );
}
