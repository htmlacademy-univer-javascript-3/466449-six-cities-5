import { PlaceCard } from './PlaceCard.tsx';
import { Nullable } from 'vitest';
import { Offer } from '../../props/Offers.ts';
import { CardTypes } from './PlaceCard.tsx';

type PlaceListProps = {
  offers: Offer[];
  cardType: CardTypes;
  onItemHover?: (id: Nullable<string>) => void;
}

export function PlaceList({offers, cardType, onItemHover}: PlaceListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          cardType={cardType}
          onHover={(id) => onItemHover?.call(null, id)}
        />
      ))}
    </>
  );
}
