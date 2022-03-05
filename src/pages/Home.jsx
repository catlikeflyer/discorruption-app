import React from "react";
import ModalWhistle from "../components/ModalWhistle";
import Denuncias from "./Denuncias";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen m-auto bg-fixed bg-cover bg-gradient-to-r from-blue-900 to-gray-900">
      <div className="min-h-max p-4 font-title bg-transparent bg-opacity-90">
        <div className="flex flex-col justify-center items-center m-8  text-white">
          <h2 className="font-title  justify-start text-7xl">
            Realiza tu denuncia completamente anonima y segura.
          </h2>
          <p className="text-6xl">¡Por un México libre de corrupción!</p>
          <ModalWhistle buttonText="Denuncia" />
        </div>
      </div>
    </section>
  );
}
