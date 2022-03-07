import { MapView, ReactLogo, SearchBar } from '../components';
import { BtnMyLocation } from '../components';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
