import React from 'react';
import { Layout } from '../../components/layout.tsx';
import Tabs from '../../tabs/Tabs.tsx';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import cn from 'classnames';
import { changeCityAction } from '../../store/Action';
import { OfferList, EmptyOfferList } from './OffersList';


export function MainScreen(): React.JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) =>
    state.offers.filter((o) => o.city.name === city)
  );
  const isLoading = useAppSelector((state) => state.offersLoadingStatus);
  const dispatch = useAppDispatch();
  const isEmpty = offers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Layout>
        <main  className={cn('page__main', 'page__main--index', {
          'page__main--index-empty': isEmpty,
        })}
        >
          <h1 className="visually-hidden">Cities</h1>
          <Tabs 
            selectedCity={city}
            onClick={(c) => dispatch(changeCityAction(c))} 
          />
          <div className="cities">
            {isLoading ? (
            <div className={'cities__places-loading'} />
            ) : (
              <div
                className={cn('cities__places-container', 'container', {
                  'cities__places-container--empty': offers.length === 0,
                })}
              >
                {!isEmpty ? (
                  <OfferList offers={offers} city={offers[0].city} />
                ) : (
                  <EmptyOfferList city={city} />
                )}
              </div>
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
}
