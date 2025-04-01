import { FC, useState } from 'react';
import { GUID, OfferItem } from '../types/offer';
import { ListCardCity } from './ListCard';

interface OffersListProps {
  offers: OfferItem[];
}

export const OffersList: FC<OffersListProps> = ({ offers }) => {
  const [, setActiveCard] = useState<GUID | null>(null);

  const handleHover = (id: GUID) => setActiveCard(id);

  const handleBlur = () => setActiveCard(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((el) => <ListCardCity key={el.id} offer={el} onHover={handleHover} onBlur={handleBlur} />)}
    </div>
  );
};
