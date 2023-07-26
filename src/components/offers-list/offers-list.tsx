import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';
import {useState} from 'react';

type OffersListProps = {
  offers: Offers;
};

function OffersList({offers}: OffersListProps) {
  const [, setActiveCard] = useState<string | null>(null);

  const handleCardMouseEnter = (idOffer: string | null) => {
    setActiveCard(idOffer);
  };

  const handleCardMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    offers.map((offer) => (
      <PlaceCard
        key={offer.id}
        item={offer}
        className={'cities'}
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      />)
    )
  );
}

export default OffersList;
