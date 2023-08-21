import {Offers} from '../../types/offer';
import {CITIES} from '../../const';
import PlaceCard from '../../components/place-card/place-card';
import FooterMemo from '../../components/footer/footer';
import HeaderMemo from '../../components/header/header';

type FavoritesScreenProps = {
  offers: Offers;
};

function FavoritesScreen({offers}: FavoritesScreenProps) {
  return (
    <div className="page">
      <HeaderMemo />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => {
                const offerListByCities = offers.filter((offer) => city === offer.city.name);
                if (offerListByCities.length !== 0) {
                  return (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offerListByCities.map((offer) => {
                          if (offer.isFavorite) {
                            return (
                              <PlaceCard key={offer.id} item={offer} className={'favorites'}
                                onMouseEnter={null} onMouseLeave={null}
                              />
                            );
                          }
                        })}
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </section>
        </div>
      </main>

      <FooterMemo />
    </div>
  );
}

export default FavoritesScreen;
