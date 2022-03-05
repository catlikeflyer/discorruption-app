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
      </div>
    </div>
  );
}
