import cn from 'classnames';
import { FavoriteData } from '../props/FavoriteData';
import { useAppDispatch } from '../store/Hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../props/Constants';
import { changeFavoriteStatusAction } from '../store/ApiActions';

type BookmarkButtonProps = FavoriteData & {
  type: string;
};

function BookmarkButton({ offerId, isFavorite: isFavorite, type }: BookmarkButtonProps) {
  const buttonDesc = isFavorite ? 'In bookmarks' : 'To bookmarks';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addToFavorites = () => {
    dispatch(changeFavoriteStatusAction({ offerId, isFavorite: !isFavorite }))
      .unwrap()
      .catch(() => navigate(AppRoutes.Login));
  };

  return (
    <button
      className={cn('button', `${type}__bookmark-button`, {
        [`${type}__bookmark-button--active`]: isFavorite,
      })}
      type="button"
      onClick={addToFavorites}
    >
      <svg className={`${type}__bookmark-icon`} width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{buttonDesc}</span>
    </button>
  );
}

export const CardBookmarkButton = (
  props: Omit<BookmarkButtonProps, 'type'>
) => <BookmarkButton {...props} type="place-card" />;

export const OfferBookmarkButton = (
  props: Omit<BookmarkButtonProps, 'type'>
) => <BookmarkButton {...props} type="offer" />;
