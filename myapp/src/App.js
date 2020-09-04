import React, { Component } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_KEY,
    libraries,
  });
  if (!isLoaded) return "Loading";
  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap>
    </div>
  );
}
