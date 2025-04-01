import { FC } from 'react';

interface CardRatingProps {
  rating: number;
}

export const CardRating: FC<CardRatingProps> = ({ rating }) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${rating * 20}%` }} ></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);
