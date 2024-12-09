import { Location, Point  } from "../props/Offers";
import { DEFAULT_MAP_ZOOM } from "../props/Constants";

export const MockLocation: Point = {
  latitude:  52.379863,
  longitude: 4.894327,
  zoom: DEFAULT_MAP_ZOOM,
};

export const Cities: Location[] = [
  {
    name: 'Paris',
    point: MockLocation
  },
  {
    name: 'Cologne',
    point: MockLocation
  },
  {
    name: 'Brussels',
    point: MockLocation
  },
  {
    name: 'Amsterdam',
    point: MockLocation
  },
  {
    name: 'Hamburg',
    point: MockLocation
  },
  {
    name: 'Dusseldorf',
    point: MockLocation
  }
];