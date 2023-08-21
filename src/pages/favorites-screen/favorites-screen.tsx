import PlaceCard from '../../components/place-card/place-card';
import FooterMemo from '../../components/footer/footer';
import HeaderMemo from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/data-process/selectors';
import {Offers} from '../../types/offer';

const offerListByCities = (offers: Offers, city: string) =>
  offers.filter((offer) => city === offer.city.name);

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector(getFavoriteOffers);
  const cities = favorites.map((element) => element.city.name);

  return (
    <div className="page">
      <HeaderMemo/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offerListByCities(favorites, city).map((offer) => (
                      <PlaceCard
                        key={offer.id}
                        item={offer}
                        className={'favorites'}
                        onMouseEnter={null}
                        onMouseLeave={null}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <FooterMemo/>
    </div>
  );
}

export default FavoritesScreen;
