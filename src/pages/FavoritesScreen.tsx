import React from 'react';
import { PlaceMock } from '../props/PlaceMocks';
import { Layout } from '../components/layout';
import { PlaceGroup } from '../components/PlaceGroup';

export type FavoritesScreenProps = {
  offers: PlaceMock[];
}

export function FavoritesScreen({ offers }: FavoritesScreenProps): React.JSX.Element {
  return (
    <div className="page">
      <Layout showFooter>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Map.groupBy(offers, (o) => o.city.name)
                  .entries()
                  .map(([cityName, offersInCity]) => (
                    <PlaceGroup
                      key={cityName}
                      cityName={cityName}
                      offers={offersInCity.filter(o => o.isFavorite)}
                      cardType='FavoritesCard'
                    />
                  )).toArray()
                };
              </ul>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}