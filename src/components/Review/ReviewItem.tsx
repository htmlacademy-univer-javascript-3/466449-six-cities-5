import type { Review } from '../../props/Review';
import { ReviewUserAvatar } from '../../components/UserAvatar';

export function ReviewItem({date, user, comment, rating}: Review) {
  return (
    <li className="reviews__item">
      <ReviewUserAvatar user={user} alt="Reviews avatar" className="reviews__user"/>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <div className="offer__description">
          <p className="reviews__text">
            {comment}
          </p>
        </div>
        <time className="reviews__time" dateTime={date.split('T')[0]}>
          {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </li>
  );
}
