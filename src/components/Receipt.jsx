import React from "react";

export default function Receipt({ lastid, globalState }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">Recibo</h1>
        {lastid && (
          <p>
            Sigue la denuncia con el siguiente folio: <span>{lastid}</span>
          </p>
        )}
        <div
          className="button-container bg-blue-700 m-10 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 md:hidden"
          href="/denuncias"
        >
          Ver denuncias
        </div>
      </div>
    </div>
  );
}
