import React from "react";
import DataForm from "./forms/DataForm";
import EvidenceForm from "./forms/EvidenceForm";
import FileForm from "./forms/FileForm";
import Receipt from "./Receipt";

export default function ScreenWhistle() {
  // Local scope states
  const [pos, setPos] = React.useState(1);
  const [globalState, setGlobalState] = React.useState({});
  const [lastid, setLastid] = React.useState("");

  return (
    <div className="absolute top-16 left-0">
      <div className="md:w-2/3 w-screen">
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
      </div>
    </div>
  );
}
