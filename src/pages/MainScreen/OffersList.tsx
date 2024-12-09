import { PlaceList } from '../../components/PlaceList';
import { useState } from 'react';
import { Nullable } from 'vitest';
import { Map } from '../../components/Map';
import { Offer } from '../../props/Offers';
import { Location } from '../../props/Offers';
import { SortingOrderList } from '../../components/SortingOrderList';
import { useAppSelector } from '../../store/Hooks';
import { sortingOrders } from '../../props/SortingOrder';

type OfferListProps = {
  offers: Offer[];
  city: Location;
};

export function OfferList({ offers, city }: OfferListProps) {
  const [selectedId] = useState<Nullable<string>>();
  const order = useAppSelector((state) => state.sortingOrder);
  offers = offers.sort(sortingOrders[order]);

  const points = offers.map((o) => ({ name: o.id, location: o.location }));

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {city.name}
        </b>
        {<SortingOrderList />}
        <div className="cities__places-list places__list tabs__content">
          <PlaceList offers={offers} cardType='CitiesCard' />
        </div>
      </section>
      <div className="cities__right-section">
        {city && (
          <Map
            city={city}
            points={points}
            selected={points.find((p) => p.name === selectedId)}
            className="cities__map"
          />
        )}
      </div>
    </>
  );
}

export function EmptyOfferList({ city }: { city: string }) {
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {city}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </>
  );
}