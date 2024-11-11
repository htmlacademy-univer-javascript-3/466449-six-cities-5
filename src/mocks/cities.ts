import { _Location, Point  } from "../props/PlaceMocks";

export const MockLocation: Point = {
  latitude:  52.379863,
  longitude: 4.894327,
  zoom: 12
};

export const Cities: _Location[] = [
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