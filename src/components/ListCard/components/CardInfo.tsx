import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CardType } from '../ListCard.types';

interface CardInfoProps {
  cardType: CardType;
  type: string;
  offerLink: string;
  title: string;
  children: ReactNode;
}

export const CardInfo: FC<CardInfoProps> = ({ children, title, offerLink, type, cardType }) => (
  <div className={`${cardType}__card-info place-card__info`}>
    {children}
    <h2 className="place-card__name">
      <Link to={offerLink}>{title}</Link>
    </h2>
    <p className="place-card__type">{type}</p>
  </div>
);
