import { CardType } from './ListCard.types';

export const size: Record<CardType, { width: number; height: number }> = {
  cities: {
    width: 260,
    height: 200
  },
  favorites: {
    width: 150,
    height: 110
  }
};
