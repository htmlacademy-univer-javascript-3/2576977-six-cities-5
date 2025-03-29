import { FC } from 'react';
import { GUID, OfferItem } from '../../types/offer';
import { route } from '../../constants/route';
import { CardWrap } from './components/CardWrap';
import { CardPreview } from './components/CardPreview';
import { CardInfo } from './components/CardInfo';
import { CardRating } from './components/CardRating';
import { CardPrice } from './components/CardPrice';

interface ListCardCityProps {
  offer: OfferItem;
  onHover: (id: GUID) => void;
  onBlur: () => void;
}

export const ListCardCity: FC<ListCardCityProps> = ({ offer, onHover, onBlur }) => {
  const { id, previewImage, isPremium, title, type, rating, price, isFavorite} = offer;
  const offerLink = route.offer(id);

  return (
    <CardWrap cardType="cities" onMouseEnter={() => onHover(id)} onMouseLeave={onBlur} >
      <CardPreview cardType="cities" offerLink={offerLink} previewImage={previewImage} isPremium={isPremium} />
      <CardInfo cardType="cities" type={type} offerLink={offerLink} title={title} >
        <CardPrice price={price} isFavorite={isFavorite} />
        <CardRating rating={rating} />
      </CardInfo>
    </CardWrap>
  );
};
