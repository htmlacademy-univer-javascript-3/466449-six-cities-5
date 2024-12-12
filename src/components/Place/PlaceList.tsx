import { PlaceCard } from './PlaceCard.tsx';
import { useState } from 'react';
import { Nullable } from 'vitest';
import { Offer } from '../../props/Offers.ts';
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
          offer={offer}
          cardType={cardType}
          onChangeActiveCardId={(id) => setActiveCard(id)}
        />
      ))}
    </>
  );
}