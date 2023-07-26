import {Link} from 'react-router-dom';
import {AppRoute, CITIES} from '../../const';
import {useState} from 'react';

function Locations():JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(CITIES[0]);

  const handleTabClick = (city: string) => {
    setActiveTab(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <Link
              className={`locations__item-link tabs__item ${activeTab === city && 'tabs__item--active'}`}
              to={AppRoute.Root}
              onClick={() => handleTabClick(city)}
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
