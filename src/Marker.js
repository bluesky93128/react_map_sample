import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Marker = props => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {showInfo ? (
        <>
          <div className="InfoWindow">
            <p className="text">latitude : {props.lat.toFixed(5)}</p>
            <p className="text">longitude : {props.lng.toFixed(5)}</p>
            <p className="text">{props.place}</p>
          </div>
        </>
      ) : null}
      <div
        className="Marker"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onTouchStart={() => setShowInfo(true)}
        onTouchEnd={() => setShowInfo(false)}
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          color={props.$hover ? "blue" : "red"}
          size={"3x"}
        />
      </div>
    </>
  );
};

export default Marker;
