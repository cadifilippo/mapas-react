import { Map } from 'mapbox-gl';
import { createContext } from 'react';

interface MapContextProps {
  isMapready: boolean;
  map?: Map;
}

export const MapContext = createContext({} as MapContextProps);
