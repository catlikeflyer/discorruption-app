import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-32 bg-slate-400 p-4 font-title">
      <div className="flex flex-col justify-center items-center m-8">
        <h2 className="font-title">Realiza tu denuncia completamente anonima y segura.</h2>
        <p>¡Por un México libre de corrupción!</p>
        <div className="button-container">Denuncia</div>
      </div>
    </div>
  );
}
