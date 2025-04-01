export type GUID = string
export type IMAGE_URL = string

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
  previewImage: IMAGE_URL;
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
