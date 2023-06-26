import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from "../config";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 40.756795, lng: -73.954298 },
      fromLatLng: null,
      toLatLng: null
    };
  }

  componentDidMount() {
    const { fromPostalCode, toPostalCode } = this.props;
    console.log(this.props)
    this.getLatLngFromPostalCode(fromPostalCode)
      .then((fromLatLng) => {
        this.setState({ fromLatLng });
        if (toPostalCode) {
          return this.getLatLngFromPostalCode(toPostalCode);
        }
        return Promise.resolve(null);
      })
      .then((toLatLng) => {
        this.setState({ toLatLng });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  getLatLngFromPostalCode = async (postalCode) => {
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

  render() {
    const { fromLatLng, toLatLng } = this.state;

    if (!fromLatLng || !toLatLng) {
      return <div>Loading...</div>;
    }

    const apiIsLoaded = (map, maps) => {
      const directionsService = new maps.DirectionsService();
      const directionsRenderer = new maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      directionsService.route(
        {
          origin: fromLatLng,
          destination: toLatLng,
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
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={10}
          center={this.state.fromLatLng}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        />
      </div>
    );
  }
}

export default GoogleMaps;
