import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DataForm from "./forms/DataForm";
import EvidenceForm from "./forms/EvidenceForm";
import FileForm from "./forms/FileForm";
import Receipt from "./Receipt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function ModalWhistle({ buttonText }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Local scope states
  const [pos, setPos] = React.useState(1);
  const [globalState, setGlobalState] = React.useState({});
  const [lastid, setLastid] = React.useState("");

  return (
      <div>
        <div
          className="button-container white-glassmorphism m-1font-bold py-2 px-4 hidden md:block"
          onClick={handleOpen}
        >
          {buttonText}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="md:w-2/3 w-screen">
            {pos === 1 && (
              <DataForm
                pos={pos}
                setPos={setPos}
                globalState={globalState}
                setGlobalState={setGlobalState}
              />
            )}
            {pos === 2 && (
              <EvidenceForm
                pos={pos}
                setPos={setPos}
                globalState={globalState}
                setGlobalState={setGlobalState}
              />
            )}
            {pos === 3 && (
              <FileForm
                pos={pos}
                setPos={setPos}
                globalState={globalState}
                setGlobalState={setGlobalState}
                setLastid={setLastid}
                lastid={lastid}
              />
            )}
            {pos === 4 && <Receipt lastid={lastid} />}
          </Box>
        </Modal>
      </div>
  );
}
