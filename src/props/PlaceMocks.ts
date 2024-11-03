import { PlaceType } from './PlaceCardProps';
import { User } from './User';

export type _Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type City = {
    name: string;
    location: _Location;
};

export type PlaceMock = {
    id: string;
    title: string;
    type: PlaceType;
    price: number;
    city: City;
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
