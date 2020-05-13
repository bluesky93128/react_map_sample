import React from "react";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";
import { defaultMapSettings } from "./utils";

const MyMap = props => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: defaultMapSettings.key }}
      defaultCenter={defaultMapSettings.defaultCenter}
      defaultZoom={defaultMapSettings.defaultZoom}
      hoverDistance={defaultMapSettings.hoverDistance}
      distanceToMouse={(pt, mousePos) => {}}
      center={props.centerPos}
      onChange={({ center }) => props.setCenterPos(center)}
    >
      <Marker
        lat={props.myPosition.lat}
        lng={props.myPosition.lng}
        place={props.myPlace}
      />
    </GoogleMapReact>
  );
};

export default MyMap;
