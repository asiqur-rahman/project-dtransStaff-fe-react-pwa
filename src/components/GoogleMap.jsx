import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

const GoogleMaps = () => {
  const mapRef = useRef(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const calculateDirections = (maps) => {
      const directionsService = new maps.DirectionsService();
      const origin = { lat: 23.810331, lng: 90.412521 };
      const destination = { lat: 23.827882, lng: 90.390574 };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    };

    if (mapRef.current) {
      const { maps } = window.google;
      calculateDirections(maps);
    }
  }, []);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyC4_I1lGIZK-xVptDI4uIR_7M0w7PKOuCk"
        }}
        defaultCenter={{ lat: 23.810331, lng: 90.412521 }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        directions={directions}
      />
    </div>
  );
};

export default GoogleMaps;
