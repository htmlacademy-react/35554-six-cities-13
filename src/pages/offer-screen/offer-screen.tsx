import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import {getRating} from '../../utils/offers';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {dropOffer} from '../../store/action';
import {fetchOffer, fetchOffersNearby} from '../../store/api-actions';

function OfferScreen(): JSX.Element {
  const {offerId} = useParams();
  console.log(offerId)
  debugger
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector((state) => state.offer);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  // const offerCurrent = fullOffers.find((item) => item.id === offerId) as FullOffer;

  // const {images, description, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods} = offerCurrent;
  // const {avatarUrl, name, isPro} = offerCurrent.host;

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
      console.log(fetchOffer(offerId))
      dispatch(fetchOffersNearby(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((image: string) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{currentOffer.title}</h1>
                <button
                  className={currentOffer.isFavorite
                    ? 'offer__bookmark-button offer__bookmark-button--active button'
                    : 'offer__bookmark-button button'}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${getRating(currentOffer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((item: string) => (
                    <li className="offer__inside-item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width={74} height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <Reviews reviews={offersNearby} />
            </div>
          </div>
          <section className="offer__map map">
            <Map city={offerCurrent.city} offers={offers} selectedOffer={null} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offer) => (
                <PlaceCard key={offer.id} item={offer} className={'near-places'} />)).slice(0,3)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
