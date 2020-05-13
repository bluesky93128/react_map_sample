import React, { useState, useEffect } from "react";
import { Button, Overlay } from "react-bootstrap";
import { getLocationInfo } from "./utils";
import MyMap from "./Map";
import "./styles.css";

function App() {
  const [centerPos, setCenterPos] = useState({ lat: 59.95, lng: 30.33 });
  const [myPosition, setMyPosition] = useState({});
  const [myPlace, setMyPlace] = useState("");

  useEffect(() => {
    getLocationInfo(setMyPosition, setMyPlace);
  }, []);

  return (
    <div className="App">
      <div className="MapContainer">
        <MyMap
          centerPos={centerPos}
          setCenterPos={setCenterPos}
          myPosition={myPosition}
          myPlace={myPlace}
        />
      </div>
      <Overlay show={true} placement="bottom">
        <Button
          variant="primary"
          className="mt-n5"
          onClick={() => setCenterPos(myPosition)}
        >
          Find Me
        </Button>
      </Overlay>
    </div>
  );
}

export default App;
