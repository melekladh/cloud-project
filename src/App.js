import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ apiKey }) => {



  const center = { lat: 35.8254, lng:  10.6369 }; 
  const zoom = 10;

  return (
    <div style={{ height: '600px', width: '100%' }}>

      <GoogleMapReact

        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={35.8254}
          lng={10.6369}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

  function App() {
  const apiKey = 'AIzaSyB-vuIzHC7iGIZ7RMYu-0Dq8VOEqAH3bu0';

  return (
    <div className="App">
      <h1>Cloud Integration Project</h1>
      <Map apiKey={apiKey} />
    </div>
  );
}

export default App;