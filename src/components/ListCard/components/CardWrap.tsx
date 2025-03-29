import { FC, ReactNode } from 'react';
import { CardType } from '../ListCard.types';

interface CardWrapProps {
  cardType: CardType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: ReactNode;
}

export const CardWrap: FC<CardWrapProps> = ({ children, cardType, onMouseEnter, onMouseLeave }) => (
  <article className={`${cardType}__card place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {children}
  </article>
);
