import React from "react";
import { TextField, Button } from "@mui/material";

export default function FileForm({ globalState, setGlobalState, pos, setPos }) {
  const [fileError, setFileError] = React.useState(false);
  const [fileURL, setFileURL] = React.useState(null);
  const [file, setFile] = React.useState();
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    /*
        if (types.includes(file.type)) {
          const storageRef = pStorage.ref();
          const fileRef = storageRef.child(file.name);
    
          await fileRef.put(file).then(() => {
            console.log("Uploaded file", file.name);
          });
          setFileURL(await fileRef.getDownloadURL());
          setError(null);
        
        } else {
          setError("Invalid file type");
          console.log(error)
        }*/
  };

  const onNextClick = (e) => {
    e.preventDefault();

    const pushState = {
      ...globalState,
      fileURL,
    };

    if (fileURL) {
      console.log(pushState);
      setGlobalState(pushState);
      setPos(pos + 1);
    } else {
      setFileError(true);
    }
  };

  return (
    <div>
      <h1 className="text-2xl">Evidencia</h1>
      {fileError && <p className="error text-red-500">Selecciona un archivo</p>}
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
      <div className="input-box">
        <TextField
          id="outlined-basic"
          label="Los hechos"
          variant="outlined"
          sx={{ marginRight: 2 }}
          value={email}
          onChange={handleEmailChange}
          fullWidth
        />
      </div>
      <Button color="secondary" onClick={onNextClick}>
        Denunciar
      </Button>
    </div>
  );
}
