import {Link} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const';
import cn from 'classnames';

type LocationsProps = {
  location: string;
  onCityClick: (cityOffers: string) => void;
};

function Locations({location, onCityClick}: LocationsProps):JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <Link
              className={cn('locations__item-link tabs__item', {'tabs__item--active': location === city})}
              to={AppRoute.Root}
              onClick={(evt) => {
                evt.preventDefault();
                onCityClick(city);
              }}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
