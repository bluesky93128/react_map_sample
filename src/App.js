import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Overlay } from "react-bootstrap";
import Marker from "./Marker";
import { getLocationInfo } from "./utils";
import "./styles.css";

function App() {
  const [centerPos, setCenterPos] = useState({ lat: 59.95, lng: 30.33 });
  const [myPosition, setMyPosition] = useState({});
  const [myPlace, setMyPlace] = useState("");
  const zoom = 13;

  useEffect(() => {
    getLocationInfo(setMyPosition, setMyPlace);
  }, []);

  return (
    <div className="App">
      <div className="MapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={zoom}
          distanceToMouse={(pt, mousePos) => {}}
          center={centerPos}
          hoverDistance={15}
          onChange={({ center }) => setCenterPos(center)}
        >
          <Marker lat={myPosition.lat} lng={myPosition.lng} place={myPlace} />
        </GoogleMapReact>
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
