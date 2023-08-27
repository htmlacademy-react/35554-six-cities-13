import {Link} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const';
import cn from 'classnames';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/app-process/app-process';
import {memo} from 'react';

type LocationsProps = {
  location: string;
};

function Locations({location}: LocationsProps):JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <Link
              className={cn('locations__item-link tabs__item', {'tabs__item--active': location === city})}
              to={AppRoute.Root}
              onClick={() => dispatch(changeCity(city))}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const LocationsMemo = memo(Locations);

export default LocationsMemo;
