import React from "react";
import ModalWhistle from "../components/ModalWhistle";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen m-auto bg-fixed bg-cover bg-gradient-to-r from-blue-900 to-gray-900">
      <div className="min-h-max p-4 font-title bg-transparent bg-opacity-90">
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
    </section>
  );
}
