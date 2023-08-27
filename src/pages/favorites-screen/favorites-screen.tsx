import PlaceCard from '../../components/place-card/place-card';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/data-process/selectors';
import cn from 'classnames';
import FavoritesEmpty from '../../components/favorites_empty/favorites-empty';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import HeaderMemo from '../../components/header/header';
import FooterMemo from '../../components/footer/footer';
import {getFavoriteOffersByCity} from '../../utils/offers';


function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector(getFavoriteOffers);
  const favoritesByCity = getFavoriteOffersByCity(favorites);
  const favoritesEmpty = favorites.length === 0;

  return (
    <div className={cn('page', {'page--favorites-empty': favoritesEmpty})}>
      <HeaderMemo isNavigation/>

      <main className={cn('page__main page__main--favorites',
        {'page__main--favorites-empty': favoritesEmpty})}
      >
        <div className="page__favorites-container container">
          <section className={cn('favorites', {'favorites--empty': favoritesEmpty})}>
            {!favoritesEmpty ?
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.entries(favoritesByCity).map(([city, offers]) => (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to={AppRoute.Root}>
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offers.map((offer) => (
                          <PlaceCard
                            key={offer.id}
                            item={offer}
                            classNameBlock={'favorites'}
                            onMouseEnter={null}
                            onMouseLeave={null}
                            size={'small'}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
              : <FavoritesEmpty/>}
          </section>
        </div>
      </main>

      <FooterMemo/>
    </div>
  );
}

export default FavoritesScreen;
