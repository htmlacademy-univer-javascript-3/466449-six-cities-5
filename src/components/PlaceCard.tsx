import {Link} from 'react-router-dom';
import { AppRoutesProps } from '../props/AppRoutesProps.ts';
import { PlaceCardProps } from '../props/PlaceCardProps.ts';

export default function PlaceCard({
  id,
  type,
  price,
  city,
  rating,
  previewImage,
  cardType,
  isFavorite,
  isPremium,
  onChangeActiveCardId
}: PlaceCardProps): JSX.Element {
  const urlSingleOffer = AppRoutesProps.Offer.replace(':id', id);
  return (
    <article
      className={cardType === 'CitiesCard' ? 'cities__card place-card' : 'favorites__card place-card'}
      onMouseOver={() => onChangeActiveCardId && onChangeActiveCardId(id)}
      onMouseLeave={() => onChangeActiveCardId && onChangeActiveCardId(null)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={cardType === 'CitiesCard' ? 'cities__image-wrapper place-card__image-wrapper' : 'favorites__image-wrapper place-card__image-wrapper'}>
        <Link to={urlSingleOffer}>
          <img
            className="place-card__image"
            src={`../../markup/img/${previewImage}`}
            width={cardType === 'CitiesCard' ? 260 : 150}
            height={cardType === 'CitiesCard' ? 200 : 110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={urlSingleOffer}>{city.name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
