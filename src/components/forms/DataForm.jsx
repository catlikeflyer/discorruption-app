// Lugar y fecha
// Nombre del denunciante *if not anonymous
// Genero y Edad
// Ocupacion
// Escolaridad
// Nombrar a denunciado u organizacion
// Descripcion de la denuncia
// Evidencia de la denuncia
// Correo Opcional

import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function DataForm({ globalState, setGlobalState, pos, setPos }) {
  // Data states
  const [dateValue, setDateValue] = React.useState(
    new Date("2022-08-18T21:11:54")
  );
  const [anonymous, setAnonymous] = React.useState(true);
  const [gender, setGender] = React.useState(null);
  const [esc, setEsc] = React.useState(null);
  const [place, setPlace] = React.useState(null);
  const [denounced, setDenounced] = React.useState(null);
  const [occ, setOcc] = React.useState(null);
  const [name, setName] = React.useState(null);

  // Error states
  const [dateError, setDateError] = React.useState(false);
  const [placeError, setPlaceError] = React.useState(false);
  const [denouncedError, setDenouncedError] = React.useState(false);

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleEscChange = (event) => {
    setEsc(event.target.value);
  };
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
  const handleDenouncedChange = (event) => {
    setDenounced(event.target.value);
  };
  const handleOccChange = (event) => {
    setOcc(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const onNextClick = (e) => {
    e.preventDefault();

    const pushState = {
      ...globalState,
      dateValue,
      place,
      denounced,
      anonymous,
      esc,
      gender,
      occ,
      name,
    };

    if (dateValue && place && denounced) {
      console.log(pushState);
      setGlobalState(pushState);
      setPos(pos + 1);
    } else {
      setDateError(true);
      setPlaceError(true);
      setDenouncedError(true);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-title">Datos importantes</h1>
      <div className="input-box">
        <TextField
          id="outlined-basic"
          label="Lugar"
          variant="outlined"
          sx={{ marginRight: 2 }}
          value={place}
          onChange={handlePlaceChange}
          error={placeError}
          required
        />
        <div className="md:mt-0 mt-4">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={dateValue}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                error={dateError}
                required
              />
            </Stack>
          </LocalizationProvider>
        </div>
      </div>
      <div className="input-box">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={anonymous} />}
            label="Anonimo"
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
            onChange={handleNameChange}
          />
        </div>
      )}
      <div className="input-box">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Sexo"
            onChange={handleGenderChange}
          >
            <MenuItem value={"masculino"}>Masculino</MenuItem>
            <MenuItem value={"femenino"}>Femenino</MenuItem>
            <MenuItem value={"no"}>Prefiero No Decirlo</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="input-box">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Escolaridad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={esc}
            label="Escolaridad"
            onChange={handleEscChange}
          >
            <MenuItem value={"ninguna"}>Ninguna</MenuItem>
            <MenuItem value={"basicos-trunca"}>Básicos trunca</MenuItem>
            <MenuItem value={"basicos"}>Básicos</MenuItem>
            <MenuItem value={"superiores"}>Superiores</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="input-box">
        <TextField
          id="outlined-basic"
          label="Ocupación"
          variant="outlined"
          sx={{ marginRight: 2 }}
          value={occ}
          onChange={handleOccChange}
        />
      </div>
      <div className="input-box">
        <TextField
          id="outlined-basic"
          label="¿A quién denuncias?"
          variant="outlined"
          sx={{ marginRight: 2 }}
          value={denounced}
          onChange={handleDenouncedChange}
          error={denouncedError}
          required
        />
      </div>
      <Button color="primary" onClick={onNextClick}>
        Siguiente
      </Button>
    </div>
  );
}
