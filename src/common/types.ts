export type GUID = string

export type OfferItem = {
  id: GUID;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type City = {
  name: string;
  location: Location;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type FormData = {
  rating: number;
  review: string;
}
