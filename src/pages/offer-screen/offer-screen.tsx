import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import PlaceCard from '../../components/place-card/place-card';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import Header from '../../components/header/header';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {getIsOfferLoading, getOffer, getOffersNearby, getReviews} from '../../store/data-process/selectors';
import {fetchOffer, fetchOffersNearby, fetchReviews} from '../../store/api-actions';
import {getRating} from '../../utils/offers';
import {MAX_COUNT_OFFERS_NEARBY, TypeHousing} from '../../const';

function OfferScreen(): JSX.Element {
  const {offerId} = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector(getOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const reviews = useAppSelector(getReviews);
  const offersNearbyToShow = offersNearby.slice(0, MAX_COUNT_OFFERS_NEARBY);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchOffersNearby(offerId));
      dispatch(fetchReviews(offerId));
    }
  }, [offerId, dispatch]);

  if (isOfferLoading) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  const {images, description, isPremium, isFavorite,
    title, rating, type, bedrooms, maxAdults, price, goods, host} = currentOffer;
  const {avatarUrl, name, isPro} = host;

  return (
    <div className="page">
      <Header isNavigation />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image: string) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton
                  offerId={offerId}
                  isFavorite={isFavorite}
                  classNameBlock={'offer'}
                  size={'large'}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${getRating(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {TypeHousing[type]}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item: string) => (
                    <li className="offer__inside-item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={avatarUrl} width={74} height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <Reviews offerId={offerId} reviews={reviews} />
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={currentOffer.city}
              offers={offersNearbyToShow.concat(currentOffer)}
              selectedOffer={currentOffer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearbyToShow.map((offer) => (
                <PlaceCard key={offer.id} item={offer} classNameBlock={'near-places'} />))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
