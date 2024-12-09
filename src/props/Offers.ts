import { UserData } from './User';

export type Point = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type Location = {
    name: string;
    location: Point;
};

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: Location;
    location: Point;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods?: string[];
    host: UserData;
    previewImage: string;
    images?: string[];
    maxAdults: number;
  };


