import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import OffersEmpty from '../../components/offers-empty/offers-empty';
import Sorting from '../../components/sorting/sorting';
import cn from 'classnames';
import {fillOffersList} from '../../store/action';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((store) => store.city);
  const offers = useAppSelector((store) => store.offers);
  const offersByActiveCity = offers.filter((offer) => offer.city.name === activeCity);

  useEffect(() => {
    dispatch(fillOffersList());
  }, [dispatch]);

  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const handleCardMouseEnter = (idOffer: string) => {
    setSelectedOffer(idOffer);
  };

  const handleCardMouseLeave = () => {
    setSelectedOffer(null);
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn('page__main page__main--index', {'page__main--index-empty': !offersByActiveCity.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations location={activeCity} />
        </div>
        <div className="cities">
          {offersByActiveCity.length
            ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersByActiveCity.length} places to stay in {activeCity}
                </b>
                <Sorting />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    offers={offersByActiveCity}
                    onCardMouseEnter={handleCardMouseEnter}
                    onCardMouseLeave={handleCardMouseLeave}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={offersByActiveCity[0]?.city}
                    offers={offersByActiveCity}
                    selectedOffer={selectedOffer}
                  />
                </section>
              </div>
            </div>
            : <OffersEmpty city={activeCity} />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
