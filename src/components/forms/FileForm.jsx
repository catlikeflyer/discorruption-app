import React, { useEffect } from "react";
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { pFirestore, pStorage } from "../../firebase/firebaseConfig";

export default function FileForm({
  globalState,
  setGlobalState,
  pos,
  setPos,
  setLastid,
  lastid,
}) {
  const [fileError, setFileError] = React.useState(false);
  const [fileURL, setFileURL] = React.useState(null);
  const [file, setFile] = React.useState();
  const [email, setEmail] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);
  const [fileNotHave, setFileNotHave] = React.useState(false);

  const types = ["image/png", "image/jpeg", "image/jpg", "*"];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (types.includes(file.type)) {
      const storageRef = pStorage.ref();
      const fileRef = storageRef.child(file.name);

      await fileRef.put(file).then(() => {
        console.log("Uploaded file", file.name);
      });
      setFileURL(await fileRef.getDownloadURL());
      setFileError(false);
      setDisabled(false);
    } else {
      setError("Invalid file type");
      console.log(error);
    }
  };

  const handleFileHaveChange = (event) => {
    setFileNotHave(!fileNotHave);
    if (!fileNotHave) {
      setFileURL(
        "https://firebasestorage.googleapis.com/v0/b/discorrupti.appspot.com/o/arm.png?alt=media&token=415ffa68-ae59-495f-b574-53436bd0f351"
      );
    }
  };

  async function addDenuncia(denuncia) {
    const newDenuncia = await pFirestore.collection("denuncias").add(denuncia);
    setLastid(newDenuncia.id);
    console.log(newDenuncia.id);
  }

  const onSubmitClick = async (e) => {
    e.preventDefault();

    const pushState = {
      ...globalState,
      fileURL,
      email,
    };

    if (fileURL) {
      addDenuncia(pushState);
      console.log("added denuncias");
      setGlobalState({ ...pushState, lastid });
      setPos(pos + 1);
      console.log(globalState);
    } else {
      setFileError(true);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-title">Evidencia</h1>
      <div className="input-box">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={fileNotHave} />}
            label="No tengo evidencia"
            onChange={handleFileHaveChange}
          />
        </FormGroup>
      </div>
      {fileError && <p className="error text-red-500">Selecciona un archivo</p>}
      {!fileNotHave && (
        <div className="input-box">
          <input
            accept="image/*"
            type="file"
            onChange={onFileChange}
            id="raised-button-file"
            error={fileError}
          />
          <label htmlFor="raised-button-file">
            Sube un archivo que evidencie la denuncia
          </label>
        </div>
      )}
      <div className="input-box">
        <TextField
          id="outlined-basic"
          label="Correo electronico"
          variant="outlined"
          sx={{ marginRight: 2 }}
          value={email}
          onChange={handleEmailChange}
          fullWidth
        />
      </div>
      <Button color="primary" onClick={onSubmitClick}>
        Denunciar
      </Button>
    </div>
  );
}
