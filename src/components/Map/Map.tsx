﻿import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { Location } from '../../props/Offers';
import { useEffect, useRef } from 'react';
import { useMap } from './UseMap';
import { currentCustomIcon, defaultCustomIcon } from '../../props/Constants';
import { Nullable } from 'vitest';

type MapProps = {
  city: Location;
  selected?: Nullable<Location>;
  points: Location[];
  className?: string;
};

export function Map({ city, selected, points, className }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      map.setView({ lat: city.location.latitude, lng: city.location.longitude}, city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      points.forEach((loc) => {
        leaflet
          .marker(
            {
              lat: loc.location.latitude,
              lng: loc.location.longitude,
            },
            {
              icon:
                loc.name === selected?.name
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selected]);

  return (
    <div style={{ height: '500px' }} ref={mapRef} className={className} />
  );
}
