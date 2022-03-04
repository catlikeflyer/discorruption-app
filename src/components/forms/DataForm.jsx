// Lugar y fecha
// Nombre del denunciante *if not anonymous
// Genero y Edad
// Ocupacion
// Escolaridad
// Nombrar a denunciado u organizacion
// Descripcion de la denuncia
// Evidencia de la denuncia
// Correo Opcional

import React from "react";
import { TextField } from "@mui/material";

export default function DataForm() {
  return (
    <div className="flex flex-col">
      <h1>Datos del denunciante</h1>
      <TextField
        id="outlined-basic"
        label="Lugar y fecha"
        variant="outlined"
      />
      <TextField
        className="p-2"
        id="outlined-basic"
        label="Nombre del denunciante"
        variant="outlined"
      />
      <TextField
        className="p-2"
        id="outlined-basic"
        label="Genero y Edad"
        variant="outlined"
      />
      <TextField
        className="p-2"
        id="outlined-basic"
        label="Ocupacion"
        variant="outlined"
      />
      <TextField
        className="p-2"
        id="outlined-basic"
        label="Escolaridad"
        variant="outlined"
      />
    </div>
  );
}
