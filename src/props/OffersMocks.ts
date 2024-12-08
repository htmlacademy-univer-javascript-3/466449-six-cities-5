import { UserData } from './User';

export type Point = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type _Location = {
    name: string;
    point: Point;
};

// export type Offer = {
//     id: string;
//     title: string;
//     type: PlaceType;
//     price: number;
//     city: _Location;
//     location: Point;
//     isFavorite: boolean;
//     isPremium: boolean;
//     rating: number;
//     previewImage: string;
//     description: string;
//     bedrooms: number;
//     goods: string[];
//     images: string[];
//     maxAdults: number;
//     host: UserData;
// };

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: _Location;
    location: Point;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: UserData;
    previewImage: string;
    images: string[];
    maxAdults: number;
};


