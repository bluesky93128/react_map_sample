export const getLocationInfo = (setMyPosition, setMyPlace) => {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        "https://api.opencagedata.com/geocode/v1/json?q=" +
          position.coords.latitude +
          "+" +
          position.coords.longitude +
          "&key=dc32b9dbe0d441f5aecfbf9bb5bc319a"
      )
        .then(response => response.json())
        .then(res => {
          setMyPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setMyPlace(res.results[0].formatted);
        })
        .catch(error => console.log("error=", error));
    });
  };
  