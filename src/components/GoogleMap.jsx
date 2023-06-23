import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import config from "../config"

const getLatLngFromPostalCode = async (postalCode) => {
  const apiKey = config.applicationSettings.googleMapsApiKey;
  const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    postalCode + ", Singapore"
  )}&key=${apiKey}`;

  try {
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();

    if (data.status === "OK" && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error("Failed to retrieve latitude and longitude.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const GoogleMaps = ({ fromPostalCode, toPostalCode }) => {
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

    const fetchData = async () => {
      if (mapRef.current && fromPostalCode && toPostalCode) {
        const currentMap = mapRef.current.map_;
        try {
          const fromResult = await getLatLngFromPostalCode(fromPostalCode);
          const { lat, lng } = fromResult;
          console.log("Latitude:", lat);
          console.log("Longitude:", lng);
          calculateDirections(currentMap);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchData();
  }, [fromPostalCode, toPostalCode]);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: config.applicationSettings.googleMapsApiKey
        }}
        defaultCenter={{ lat: 23.810331, lng: 90.412521 }}
        defaultZoom={10}
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

