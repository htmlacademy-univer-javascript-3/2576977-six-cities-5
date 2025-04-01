import { FC } from 'react';

interface CardPriceProps {
  price: number;
  isFavorite: boolean;
}

export const CardPrice: FC<CardPriceProps> = ({ isFavorite, price }) => (
  <div className="place-card__price-wrapper">
    <div className="place-card__price">
      <b className="place-card__price-value">&euro;{price}</b>
      <span className="place-card__price-text">&#47;&nbsp;night</span>
    </div>
    <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      {isFavorite ? <span className="visually-hidden">In bookmarks</span> : <span className="visually-hidden">To bookmarks</span>}
    </button>
  </div>
);
