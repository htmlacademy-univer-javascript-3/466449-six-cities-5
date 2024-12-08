import leaflet from 'leaflet';

export const defaultCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});
  
export const currentCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

export const DEFAULT_MAP_ZOOM = 12;

export const AppRoutes = {
    MainScreen: '/',
    Login: '/login',
    Offer: '/offer/:id',
    Favorites: '/favorites',
};

export const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
};