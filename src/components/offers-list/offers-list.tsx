import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  onCardMouseEnter: (id: string) => void;
  onCardMouseLeave: () => void;
};

function OffersList({offers, onCardMouseEnter, onCardMouseLeave}: OffersListProps) {
  return (
    offers.map((offer) => (
      <PlaceCard
        key={offer.id}
        item={offer}
        classNameBlock={'cities'}
        onMouseEnter={onCardMouseEnter}
        onMouseLeave={onCardMouseLeave}
      />)
    )
  );
}

export default OffersList;
