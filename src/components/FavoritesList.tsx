import { FC } from 'react';
import { OfferItem } from '../common/types';
import { FavoritesCard } from './FavoritesCard';

interface FavoritesListProps {
  title: string;
  offers: OfferItem[];
}

export const FavoritesList: FC<FavoritesListProps> = ({title, offers}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{title}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
    </div>
  </li>
);
