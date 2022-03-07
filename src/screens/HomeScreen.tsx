import { MapView, ReactLogo } from '../components';
import { BtnMyLocation } from '../components';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
    </div>
  );
};
