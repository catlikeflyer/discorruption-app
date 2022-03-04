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
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function DataForm() {
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  return (
    <div className="flex flex-col">
      <h1>Datos del denunciante</h1>
      <div className="flex flex-col md:flex-row">
        <TextField
          id="outlined-basic"
          label="Lugar"
          variant="outlined"
          sx={{ marginRight: 2 }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
    </div>
  );
}
