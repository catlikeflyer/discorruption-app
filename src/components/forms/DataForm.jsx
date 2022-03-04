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
import {
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function DataForm() {
  const handleDateChange = (newValue) => {
    setDateValue(newValue);
    console.log(newValue);
  };

  const [dateValue, setDateValue] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [anonymous, setAnonymous] = React.useState(true);

  return (
    <div className="flex flex-col">
      <h1>Datos del denunciante</h1>
      <div className="input-box">
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
              value={dateValue}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <div className="input-box">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Anonimo"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
          />
        </FormGroup>
      </div>
      {!anonymous && (
        <div className="input-box">
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            sx={{ marginRight: 2 }}
          />
        </div>
      )}
      <div className="input-box">
          </div>
    </div>
  );
}
