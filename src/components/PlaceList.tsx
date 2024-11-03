import PlaceCard from './PlaceCard.tsx';
import {useState} from 'react';
import {Nullable} from 'vitest';
import { PlaceMock } from '../props/PlaceMocks.ts';
import { CardTypes } from '../props/PlaceCardProps.ts';

type PlaceListProps = {
  offers: PlaceMock[];
  cardType: CardTypes;
}

export function PlaceList({offers, cardType}: PlaceListProps): JSX.Element {
  const [, setActiveCard] = useState<Nullable<string>>();

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          {...offer}
          key={offer.id}
          cardType={cardType}
          onChangeActiveCardId={(id) => setActiveCard(id)}
        />
      ))}
    </>
  );
}
