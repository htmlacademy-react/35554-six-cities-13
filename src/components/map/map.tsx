import {CityOffer, Offers} from '../../types/offer';
import {useRef} from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: CityOffer;
  offers: Offers;
};

function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  return (
    <section style={{height: '100%'}} ref={mapRef}></section>
  );
}

export default Map;
