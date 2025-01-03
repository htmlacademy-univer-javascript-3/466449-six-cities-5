import { useState, createRef, FormEvent } from 'react';
import { sendReview } from '../../store/ApiActions';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';

export function ReviewForm() {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
    disabled: false,
  });

  const offerId = useAppSelector((state) => state.currentOffer.offer?.id);
  const dispatch = useAppDispatch();
  const formRef = createRef<HTMLFormElement>();

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value} = e.target;
    setFormData({...formData, rating: Number(value)});
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, review: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (offerId === undefined) {
      return;
    }
    setFormData({ ...formData, disabled: true });
    dispatch(
      sendReview({
        offerId,
        formData: { comment: formData.review, rating: formData.rating },
      })
    )
      .unwrap()
      .then(() => {
        setFormData({ ...formData, rating: 0, review: '' });
        formRef.current?.reset();
      })
      .catch(() => {})
      .finally(() => setFormData({ ...formData, disabled: false }));
  };


  return (
    <form
      className="reviews__form form"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          onChange={handleRatingChange}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          onChange={handleRatingChange}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            formData.disabled ||
            formData.review.length > 300 ||
            formData.review.length < 50 ||
            formData.rating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
