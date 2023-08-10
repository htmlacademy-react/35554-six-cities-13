import {Offer} from '../../types/offer';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getRating} from '../../utils/offers';

type PlaceCardProps = {
  item: Offer;
  className: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
};

const typeHousing = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
} as const;

function PlaceCard({item, className, onMouseEnter, onMouseLeave}: PlaceCardProps): JSX.Element {
  const {id, type, title, isPremium, isFavorite, price, previewImage, rating} = item;
  console.log(id)

  const handleMouseEnter = () => {
    onMouseEnter?.(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave?.();
  };

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite
            ? 'place-card__bookmark-button place-card__bookmark-button--active button'
            : 'place-card__bookmark-button button'} type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: item.id})}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeHousing[type]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
