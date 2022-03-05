import React from "react";
import ModalWhistle from "../components/ModalWhistle";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen bg-fixed bg-center bg-screen bg-[url('https://pixabay.com/get/g3aeb814af391ae461d6710d22a6e614d1be084f0e6bbab58dcda6f1d168c00d66eeb14a0187a8db4745712856e32e9f8812b0f4cf350334981538089304efdab_1280.jpg')]">
    <div className="flex items-center opacity-90 justify-center h-screen w-screen m-auto bg-cover bg-gradient-to-r from-blue-900 to-gray-900">
      <div className="min-h-max p-4 font-title bg-transparent bg-opacity-95">
        <div className="flex flex-col justify-center items-center m-8  text-white">
          <h2 className="font-title justify-start text-3xl md:text-6xl ">
            Realiza tu denuncia completamente anonima y segura.
          </h2>
          <br />
          <p className="md:text-4xl text-xl">
            ¡Por un México libre de corrupción!
          </p>
          <ModalWhistle buttonText="Denunciar" />
          <a
            style={{ textDecoration: "none" }}
            className="md:hidden"
            href="/denunciar"
          >
            <div
              className="button-container white-glassmorphism m-10 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 md:hidden"
              href="/denunciar"
            >
              Denunciar
            </div>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
