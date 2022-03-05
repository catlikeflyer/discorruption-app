import React from "react";
import { Button } from "@mui/material";

export default function Privacy({ pos, setPos }) {
  return (
    <div>
      <h1 className="text-2xl font-bold font-title">Avisos de privacidad</h1>
      <p className="text-xl">
        El equipo <em>Flowchart</em>, es el responsable del tratamiento de los datos
        personales que nos proporcione. Los datos que se buscan recabar son
        opcionales, el nombre del denunciante será usado como parte de la
        denuncia y no será publicado manteniendo la denuncia anónima; mientras
        el correo será usado solamente como medio de comunicación para aclarar
        cualquier duda de privacidad entre el equipo responsable por los datos y
        el denunciante. Cualquier duda que surja al respecto de el uso de datos
        o su recolección puede ser dirigida al siguiente contacto:
        a01025276@tec.mx
      </p>
      <Button
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          setPos(pos + 1);
        }}
      >
        Siguiente
      </Button>
    </div>
  );
}
