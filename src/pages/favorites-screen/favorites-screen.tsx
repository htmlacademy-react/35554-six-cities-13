import PlaceCard from '../../components/place-card/place-card';
import FooterMemo from '../../components/footer/footer';
import HeaderMemo from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/data-process/selectors';
import {Offers} from '../../types/offer';
import cn from 'classnames';
import FavoritesEmpty from "../../components/favorites_empty/favorites-empty";

const offerListByCities = (offers: Offers, city: string) =>
  offers.filter((offer) => city === offer.city.name);

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector(getFavoriteOffers);
  const cities = favorites.map((element) => element.city.name);
  const favoritesEmpty = favorites.length === 0;

  return (
    <div className={cn('page', {'page--favorites-empty': favoritesEmpty})}>
      <HeaderMemo/>

      <main className={cn('page__main page__main--favorites',
        {'page__main--favorites-empty': favoritesEmpty})}
      >
        <div className="page__favorites-container container">
          <section className={cn('favorites', {'favorites--empty': favoritesEmpty})}>
            {!favoritesEmpty ?
              <>
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
              </>
              : <FavoritesEmpty />}
          </section>
        </div>
      </main>

      <FooterMemo/>
    </div>
  );
}

export default FavoritesScreen;
