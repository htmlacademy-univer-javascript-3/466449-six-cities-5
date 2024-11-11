import { PlaceType } from './PlaceCardProps';
import { User } from './User';

export type Point = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type _Location = {
    name: string;
    point: Point;
};

export type PlaceMock = {
    id: string;
    title: string;
    type: PlaceType;
    price: number;
    city: _Location;
    location: Point;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    description: string;
    bedrooms: number;
    goods: Array<string>;
    images: Array<string>;
    maxAdults: number;
    host: User;
};
