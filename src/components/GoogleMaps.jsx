import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from "../config";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinations: [],
    };
  }

  componentDidMount() {
    const { fromPostalCode, toPostalCodes } = this.props;
    const postalCodes = [fromPostalCode, ...toPostalCodes];
    this.getLatLngFromPostalCodes(postalCodes)
      .then((destinations) => {
        this.setState({ destinations });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  getLatLngFromPostalCodes = async (postalCodes) => {
    const apiKey = config.applicationSettings.googleMapsApiKey;
    const promises = postalCodes.map(async (postalCode) => {
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
          throw new Error(`Failed to retrieve latitude and longitude for postal code: ${postalCode}`);
        }
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    });

    try {
      return await Promise.all(promises);
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { destinations } = this.state;

    if (destinations.length === 0) {
      return <div>Loading...</div>;
    }

    const apiIsLoaded = (map, maps) => {
      const directionsService = new maps.DirectionsService();
      const directionsRenderer = new maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      const waypoints = destinations.slice(1, destinations.length - 1).map((destination) => ({
        location: destination,
        stopover: true,
      }));

      directionsService.route(
        {
          origin: destinations[0],
          destination: destinations[destinations.length - 1],
          waypoints,
          travelMode: maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`Error fetching directions: ${result}`);
          }
        }
      );
    };

    return (
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: config.applicationSettings.googleMapsApiKey,
          }}
          defaultCenter={destinations[0]}
          defaultZoom={10}
          center={destinations[0]}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        />
      </div>
    );
  }
}

export default GoogleMaps;