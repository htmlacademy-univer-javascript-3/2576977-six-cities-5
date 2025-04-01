import { FC } from 'react';
import { IMAGE_URL } from '../../../types/offer';
import { Link } from 'react-router-dom';
import { size } from '../ListCard.constants';
import { CardType } from '../ListCard.types';

interface CardPreviewProps {
  cardType: CardType;
  offerLink: string;
  previewImage: IMAGE_URL;
  isPremium: boolean;
}

export const CardPreview: FC<CardPreviewProps> = ({ offerLink, previewImage, isPremium, cardType }) => (
  <>
    {isPremium && <div className="place-card__mark"> <span>Premium</span></div>}
    <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
      <Link to={offerLink}>
        <img className="place-card__image" src={previewImage} {...size[cardType]} alt="Place image" />
      </Link>
    </div>
  </>
);
