import {CityOffer, Offers} from '../../types/offer';
import {useRef} from 'react';

type MapProps = {
  city: CityOffer;
  offers: Offers;
};

function Map(): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  return (
    <section style={{height: '100%'}}></section>
  );
}

export default Map;
