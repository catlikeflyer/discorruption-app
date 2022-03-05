import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function EvidenceForm({
  globalState,
  setGlobalState,
  pos,
  setPos,
}) {
  // Data states
  const [desc, setDesc] = React.useState(null);

  // Error states
  const [descError, setDescError] = React.useState(false);

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const onNextClick = (e) => {
    e.preventDefault();

    const pushState = {
      ...globalState,
      desc,
    };

    if (desc) {
      console.log(pushState);
      setGlobalState(pushState);
      setPos(pos + 1);
    } else {
      setDescError(true);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">Descripción</h1>
      <div className="input-box">
        <TextField
          id="outlined-basic"
          label="Los hechos"
          variant="outlined"
          sx={{ marginRight: 2 }}
          value={desc}
          onChange={handleDescChange}
          error={descError}
          multiline
          rows={10}
          fullWidth
          required
        />
      </div>
      <Button color="primary" onClick={onNextClick}>
        Siguiente
      </Button>
    </div>
  );
}
