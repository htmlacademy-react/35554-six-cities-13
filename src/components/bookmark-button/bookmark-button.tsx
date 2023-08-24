import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {changeFavoriteStatus} from '../../store/api-actions';
import cn from 'classnames';
import {SizeOptions} from '../../types/offer';

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

  const handleBookmarkButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteStatus({
        offerId: offerId,
        status: Number(!isFavorite)
      }));
    } else {
      navigate(AppRoute.Login);
    }
  };
  return (
    <button
      className={cn(`${classNameBlock}__bookmark-button`, 'button', {
        [`${classNameBlock}__bookmark-button--active`]: isFavorite
      })}
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
