import {Offer, SizeOptions} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute, TypeHousing} from '../../const';
import {getRating} from '../../utils/offers';
import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  item: Offer;
  classNameBlock: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
  size?: string;
};

const sizeImageOptions: SizeOptions = {
  small: {width: '150', height: '110'},
  large: {width: '260', height: '200'},
};

function PlaceCard({item, classNameBlock, onMouseEnter, onMouseLeave, size = 'large'}: PlaceCardProps): JSX.Element {
  const {id, type, title, isPremium, isFavorite, price, previewImage, rating} = item;

  const handleMouseEnter = () => {
    onMouseEnter?.(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave?.();
  };

  return (
    <article
      className={`${classNameBlock}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${classNameBlock}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} {...sizeImageOptions[size]} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={id}
            isFavorite={isFavorite}
            classNameBlock={'place-card'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{TypeHousing[type]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
