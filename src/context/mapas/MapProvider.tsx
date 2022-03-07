import { FC, useReducer } from 'react';
import { Map } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';

export interface MapState {
  isMapready: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapready: false,
  map: undefined,
};

export const MapProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  return <MapContext.Provider value={state}>{children}</MapContext.Provider>;
};
