import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus, StatusFavorite} from '../../const';
import {changeFavoriteStatus} from '../../store/api-actions';
import cn from 'classnames';
import {SizeOptions} from '../../types/offer';
import {useState} from 'react';

type BookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  classNameBlock: string;
  size?: string;
};

const sizeBookmarkOptions: SizeOptions = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'},
};

function BookmarkButton({offerId, isFavorite, classNameBlock, size = 'small'}: BookmarkButtonProps):JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isFavoriteOffer, setIsFavoriteOffer] = useState<boolean>(isFavorite);

  const handleBookmarkButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    setIsFavoriteOffer((prevIsFavoriteOffer) =>!prevIsFavoriteOffer);

    dispatch(changeFavoriteStatus({
      offerId: offerId,
      status: Number(!isFavoriteOffer ? StatusFavorite.Add : StatusFavorite.Delete),
    }));
  };
  return (
    <button
      className={cn(`${classNameBlock}__bookmark-button`, 'button', isFavoriteOffer &&
        `${classNameBlock}__bookmark-button--active`)}
      type="button"
      onClick={handleBookmarkButtonClick}
    >
      <svg className={`${classNameBlock}__bookmark-icon`} {...sizeBookmarkOptions[size]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
