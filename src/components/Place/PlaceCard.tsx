import {Link} from 'react-router-dom';
import { AppRoutes } from '../../props/Constants';
import { Offer } from '../../props/Offers';
import cn from 'classnames';
import { Nullable } from 'vitest';

export type CardTypes = 'cities' | 'favorites' | 'near-places';

export type PlaceCardProps = {
  offer: Offer;
  cardType: CardTypes;
  onHover?: (id: Nullable<string>) => void;
}

export function PlaceCard({
  offer,
  cardType,
  onHover,
}: PlaceCardProps): JSX.Element {
  const urlSingleOffer = AppRoutes.Offer.replace(':id', offer.id);
  return (
    <article
      className={cn('place-card', `${cardType}__card`)}
      onMouseOver={() => onHover?.call(null, offer.id)}
      onMouseLeave={() => onHover?.call(null, null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={cn('place-card__image-wrapper', `${cardType}__image-wrapper`)}>
        <Link to={urlSingleOffer}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardType === 'favorites' ? 150 : 260}
            height={cardType === 'favorites' ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={urlSingleOffer}>{offer.city.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
