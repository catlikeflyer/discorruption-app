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
  const [anonymous, setAnonymous] = React.useState();
  const [gender, setGender] = React.useState();
  const [esc, setEsc] = React.useState();
  const [place, setPlace] = React.useState();
  const [denounced, setDenounced] = React.useState();
  const [occ, setOcc] = React.useState();
  const [name, setName] = React.useState();

  const [full, setFull] = React.useState(false);

  // Error states
  const [dateError, setDateError] = React.useState(false);
  const [placeError, setPlaceError] = React.useState(false);
  const [denouncedError, setDenouncedError] = React.useState(false);
  const [anonymousError, setAnonymousError] = React.useState(false);
  const [genderError, setGenderError] = React.useState(false);
  const [escError, setEscError] = React.useState(false);
  const [occError, setOccError] = React.useState(false);

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
    if (dateValue === "") {
      setDateError(true);
    } else {
      setDateError(false);
    }
    if (place === "") {
      setPlaceError(true);
    } else {
      setPlaceError(false);
    }
    if (denounced === "") {
      setDenouncedError(true);
    } else {
      setDenouncedError(false);
    }
    if (anonymous === "") {
      setAnonymousError(true);
    } else {
      setAnonymousError(false);
    }
    if (esc === "") {
      setEscError(true);
    } else {
      setEscError(false);
    }
    if (gender === "") {
      setGenderError(true);
    } else {
      setGenderError(false);
    }
    if (occ === "") {
      setOccError(true);
    } else {
      setOccError(false);
    }

    const pushState = {
      ...globalState,
      dateValue,
      place,
      denounced,
      anonymous,
      esc,
      gender,
      occ,
    };

    if (!dateError || !placeError || !denouncedError) {
      console.log(pushState);
      setFull(true);
      setGlobalState(pushState);
      setPos(pos + 1);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">Datos importantes</h1>
      <div className="input-box">
        <TextField
          id="outlined-basic"
          label="Lugar"
          variant="outlined"
          sx={{ marginRight: 2 }}
          value={place}
          onChange={handlePlaceChange}
          error={placeError}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={dateValue}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
              error={dateError}
            />
          </Stack>
        </LocalizationProvider>
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
        />
      </div>
      <button disabled={full} onClick={onNextClick}>
        next
      </button>
    </div>
  );
}
