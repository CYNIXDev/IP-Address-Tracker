import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L, { icon } from 'leaflet'
import marker from '../assets/images/icon-location.svg'

function MapCreator({ lat, lng, city }) {
  const customIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [35, 45]
  })
  return (
    <>
      <MapContainer key={lat} center={[lat, lng,]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {city != "-" && <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{city}</Popup>
        </Marker>}

      </MapContainer>
    </>
  );
}

export default MapCreator;
