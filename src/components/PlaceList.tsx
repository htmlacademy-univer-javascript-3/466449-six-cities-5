import PlaceCard from './PlaceCard.tsx';
import {useState} from 'react';
import {Nullable} from 'vitest';
import { Offer } from '../props/OffersMocks.ts';
import { CardTypes } from './PlaceCard.tsx';

type PlaceListProps = {
  offers: Offer[];
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