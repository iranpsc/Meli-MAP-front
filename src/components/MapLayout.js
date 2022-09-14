import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapRectangle from "./MapRectangle";

function MapLayout() {
  return (
    <MapContainer
      center={[36.32, 50.02]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapRectangle />
    </MapContainer>
  );
}

export default MapLayout;
