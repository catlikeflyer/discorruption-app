import React from "react";
import ModalWhistle from "../components/ModalWhistle";

export default function Home() {
  return (
    <div className="background-image: url('https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg')" >
    <div className="min-h-screen p-4 font-title bg-gradient-to-br from-[#132C33] to-[#126E82] bg-opacity-5">
      <div className="flex flex-col justify-center items-center m-8  text-white">
        <h2 className="font-title  justify-start text-7xl">Realiza tu denuncia completamente anonima y segura.</h2>
        <p className="text-6xl">¡Por un México libre de corrupción!</p>
        <ModalWhistle buttonText="Denuncia" />
      </div>
      
    </div>
    </div>
  );
}
