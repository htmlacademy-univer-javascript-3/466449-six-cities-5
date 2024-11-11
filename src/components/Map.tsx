import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { _Location } from '../props/PlaceMocks';
import { useEffect, useRef } from 'react';
import { useMap } from './UseMap';
import { defaultCustomIcon, currentCustomIcon } from '../props/MapProps';
import { Nullable } from 'vitest';

type MapProps = {
  city: _Location;
  selected: Nullable<_Location>;
  locations: _Location[];
};

export function Map({ city, selected, locations }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.point);

  useEffect(() => {
    if (map) {
      locations.forEach((loc) => {
        leaflet
          .marker(
            {
              lat: loc.point.latitude,
              lng: loc.point.longitude,
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
  }, [map, locations, selected]);

  return (
    <div style={{ height: '500px' }} ref={mapRef} className="cities__map" />
  );
}