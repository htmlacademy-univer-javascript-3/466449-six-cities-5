import { City } from './PlaceMocks';

export type CardTypes = 'CitiesCard' | 'FavoritesCard';

export type PlaceCardProps = {
  id: string;
  type: PlaceType;
  price: number;
  city: City;
  rating: number;
  previewImage: string;
  cardType: CardTypes;
  isFavorite?: boolean;
  isPremium?: boolean;
  onChangeActiveCardId?: (id: string | null) => void;
}

export enum PlaceType {
  Apartment = 'Apartment',
  Room = 'Room',
}
