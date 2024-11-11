import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Nullable } from 'vitest';
import { PlaceMock, _Location } from '../props/PlaceMocks.ts';
import { PlaceList } from '../components/PlaceList.tsx';
import { Layout } from '../components/layout.tsx';
import { Map } from '../components/map.tsx';

export type MainScreenProps = {
  offers: PlaceMock[];
  city: _Location
}

export function MainScreen({offers, city}: MainScreenProps): React.JSX.Element {
  const [selectedId, setSelectedId] = useState<Nullable<string>>();
  const points = offers.map((o) => ({ name: o.id, point: o.location }));
  return (
    <div className="page page--gray page--main">
      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>Paris</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>Cologne</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>Brussels</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item tabs__item--active" to="#">
                    <span>Amsterdam</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>Hamburg</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>Dusseldorf</span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <PlaceList offers = {offers.filter(o => (o.city.name === 'Amsterdam'))} cardType='CitiesCard'/>
                </div>
              </section>
              <div className="cities__right-section">
              <Map
                city={city}
                locations={points}
                selected={points.find((p) => p.name === selectedId)}
              />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}