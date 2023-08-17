import {useState} from 'react';
import {SortingOffers} from '../../const';
import {TSorting} from '../../types/offer';
import cn from 'classnames';

type SortingProps = {
  selectedSorting: TSorting;
  onTypeClick: (sort: TSorting) => void;
};

function Sorting({selectedSorting, onTypeClick}: SortingProps):JSX.Element {
  const [sortingIsOpened, setSortingIsOpened] = useState(false);

  const handleTypeSortingClick = (typeSorting: TSorting) => {
    onTypeClick(typeSorting);
    setSortingIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortingIsOpened(!sortingIsOpened)}
      >
        {SortingOffers[selectedSorting]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          'places__options--opened': sortingIsOpened
        })}
      >
        {Object.entries(SortingOffers).map(([type, value]) => (
          <li
            className={cn('places__option', {'places__option--active': type === selectedSorting})}
            key={type}
            tabIndex={0}
            onClick={() => handleTypeSortingClick(type)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
