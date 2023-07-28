import React, {useEffect, useRef, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityOffer} from '../types/offer';
import {COPYRIGHT, TILE_LAYER} from '../const';

function useMap(mapRef: React.MutableRefObject<HTMLElement | null>, city: CityOffer): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const {latitude, longitude, zoom} = city.location;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      const layer = new TileLayer(TILE_LAYER, {
        attribution: COPYRIGHT,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, latitude, longitude, zoom]);

  return map;
}

export default useMap;
