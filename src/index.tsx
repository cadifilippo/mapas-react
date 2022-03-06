import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl';

import './styles.css';

const token = process.env.REACT_APP_MAPBOX_TOKEN;
mapboxgl.accessToken = token?.toString() || '';

if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
