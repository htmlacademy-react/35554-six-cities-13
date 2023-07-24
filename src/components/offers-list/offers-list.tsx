import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';
import {useState} from 'react';

type OffersListProps = {
  offers: Offers;
};

function OffersList({offers}: OffersListProps) {
  const [, setActiveCard] = useState(null);

  const handleCardMouseEnter = (idOffer) => {
    setActiveCard(idOffer);
  };

  return (
    offers.map((offer) => (
      <PlaceCard
        key={offer.id}
        item={offer}
        className={'cities'}
        onMouseEnter={handleCardMouseEnter}
      />)
    )
  );
}

export default OffersList;
