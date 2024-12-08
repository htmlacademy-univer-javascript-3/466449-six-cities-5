import React from 'react';
import { useState, useEffect } from 'react';
import { Nullable } from 'vitest';
import { _Location } from '../../props/OffersMocks.ts';
import { PlaceList } from '../../components/PlaceList.tsx';
import { Layout } from '../../components/layout.tsx';
import { Map } from '../../components/Map.tsx';
import Tabs from '../../tabs/Tabs.tsx';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { fillOrdersAction } from '../../store/Action.ts';


export function MainScreen(): React.JSX.Element {
  const [selectedId] = useState<Nullable<string>>();

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) =>
    state.offers.filter((o) => o.city.name === city.name)
  );

  const points = offers.map((o) => ({ name: o.id, point: o.location }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOrdersAction());
  });

  return (
    <div className="page page--gray page--main">
      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs selectedCity={city.name} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city.name}</b>
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
                  <PlaceList offers = {offers} cardType='CitiesCard'/>
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
