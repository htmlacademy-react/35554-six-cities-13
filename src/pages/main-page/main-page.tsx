import Header from '../../components/header/header';
import {Offers} from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import {useState} from 'react';

type MainPageProps = {
  offers: Offers;
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const city = offers[0].city;
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
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
                  offers={offers}
                  city={city}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
