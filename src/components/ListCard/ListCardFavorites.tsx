import { FC } from 'react';
import { OfferItem } from '../../types/offer';
import { route } from '../../constants/route';
import { CardWrap } from './components/CardWrap';
import { CardPreview } from './components/CardPreview';
import { CardInfo } from './components/CardInfo';
import { CardRating } from './components/CardRating';
import { CardPrice } from './components/CardPrice';

interface ListCardFavoritesProps {
  offer: OfferItem;
}

export const ListCardFavorites: FC<ListCardFavoritesProps> = ({ offer }) => {
  const { id, previewImage, isPremium, title, type, rating, price, isFavorite} = offer;
  const offerLink = route.offer(id);

  return (
    <CardWrap cardType="favorites" >
      <CardPreview cardType="favorites" offerLink={offerLink} previewImage={previewImage} isPremium={isPremium} />
      <CardInfo cardType="favorites" type={type} offerLink={offerLink} title={title} >
        <CardPrice price={price} isFavorite={isFavorite} />
        <CardRating rating={rating} />
      </CardInfo>
    </CardWrap>
  );
};
