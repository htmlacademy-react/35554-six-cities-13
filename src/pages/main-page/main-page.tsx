import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import OffersEmpty from '../../components/offers-empty/offers-empty';
import {changeCity} from '../../store/action';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((store) => store.city);
  const offers = useAppSelector((store) => store.offers);

  const offersByCurrentCity = offers.filter((offer) => offer.city.name === city);

  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const handleCardMouseEnter = (idOffer: string) => {
    setSelectedOffer(idOffer);
  };

  const handleCardMouseLeave = () => {
    setSelectedOffer(null);
  };

  const handleCityClick = (cityOffers: string) => {
    dispatch(changeCity(cityOffers));
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations location={city} onCityClick={handleCityClick} />
        </div>
        <div className="cities">
          {offersByCurrentCity.length
            ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersByCurrentCity.length} places to stay in {offersByCurrentCity[0].city.name}
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    offers={offers}
                    onCardMouseEnter={handleCardMouseEnter}
                    onCardMouseLeave={handleCardMouseLeave}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={offersByCurrentCity[0]?.city}
                    offers={offersByCurrentCity}
                    selectedOffer={selectedOffer}
                  />
                </section>
              </div>
            </div>
            : <OffersEmpty />}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
