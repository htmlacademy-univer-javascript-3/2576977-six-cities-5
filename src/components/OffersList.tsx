import { FC, useState } from 'react';
import { Card } from './Card';
import { GUID, OfferItem } from '../common/types';

interface OffersListProps {
  offers: OfferItem[];
}

export const OffersList: FC<OffersListProps> = ({ offers }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<GUID | null>(null);

  const handleHover = (id: GUID) => setActiveCard(id);

  const handleBlur = () => setActiveCard(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((el) => <Card key={el.id} offer={el} onHover={handleHover} onBlur={handleBlur} />)}
    </div>
  );
};
