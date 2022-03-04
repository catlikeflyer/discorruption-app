import React from "react";
import ModalWhistle from "../components/ModalWhistle";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen m-auto bg-fixed bg-cover bg-[url('https://pixabay.com/get/g4c866c7f4a1d7dc07c9cd4c7b2f55f82c137fef9d6b33e20fc0614c22a0f16f74f6c62a6a7d9b31276d1d6bfa4e2848e.jpg')]" >
    <div className="min-h-max p-4 font-title bg-[#132C33] bg-opacity-90">
      <div className="flex flex-col justify-center items-center m-8  text-white">
        <h2 className="font-title  justify-start text-7xl">Realiza tu denuncia completamente anonima y segura.</h2>
        <p className="text-6xl">¡Por un México libre de corrupción!</p>
        <ModalWhistle buttonText="Denuncia" />
      </div>
      
    </div>
    </section>
  );
}
