import React from 'react';
import { Layout } from '../../components/layout';
import { Offer } from '../../props/Offers';
import type { Review } from '../../props/Review';
import { ReviewForm } from '../../components/Review/ReviewForm';
import ReviewList from '../../components/Review/ReviewList';
import { AuthorizationStatus, DEFAULT_MAP_ZOOM } from '../../props/Constants';
import { Map } from '../../components/Map/Map';
import { OfferBookmarkButton } from '../../components/BookmarkButton';
import { OfferUserAvatar } from '../../components/UserAvatar';
import { OfferGoods } from './OfferGoods';
import { PlaceList } from '../../components/Place/PlaceList';


type OfferScreenProps = {
  reviews: Review[];
  offer: Offer;
  nearbyOffers: Offer[];
  authStatus: AuthorizationStatus;
}

export function OfferScreen({ reviews, offer, nearbyOffers, authStatus }: OfferScreenProps): React.JSX.Element {
  const offerLocation = { name: offer.id, location: offer.location };
  const displayedOffers = nearbyOffers
    .filter((o) => o.id !== offer.id)
    .slice(0, 3);
  const nearbyPoints = displayedOffers
    .map((o) => ({ name: o.id, location: o.location }))
    .concat(offerLocation);
  return (
    <div className="page">
      <Layout>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images?.slice(0, 6).map((img) => (
                <div key={img} className="offer__image-wrapper">
                  <img className="offer__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <OfferBookmarkButton isFavorite={offer.isFavorite} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating * 100) / 5}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods items={offer.goods} />
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferUserAvatar
                  user={offer.host}
                  alt="Host avatar"
                  className="offer__host-user"
                />
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList reviews={reviews} />
                {authStatus === AuthorizationStatus.Auth && <ReviewForm />}
              </section>
            </div>
          </div>
          <div className={'offer__map-wrapper'}>
            <Map
              city={{
                ...offerLocation,
                location: { ...offerLocation.location, zoom: DEFAULT_MAP_ZOOM },
              }}
              points={nearbyPoints}
              selected={offerLocation}
              className="offer__map"
            />
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <PlaceList offers={displayedOffers} cardType='near-places'/>
            </div>
          </section>
        </div>
      </main>
      </Layout>
    </div>
  );
}
