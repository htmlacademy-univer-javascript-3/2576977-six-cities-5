import { OfferItem } from '../types/offer';

export const offers: OfferItem[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 6,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 44.35514938496378,
      zoom: 6,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'https://picsum.photos/260/200',
  },
  {
    id: '11',
    title: 'Not so good location',
    type: 'apartment',
    price: 20,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 6,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 6,
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    previewImage: 'https://picsum.photos/260/200',
  },
  {
    id: '12',
    title: 'Not so good location',
    type: 'apartment',
    price: 20,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 6,
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 6,
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    previewImage: 'https://picsum.photos/260/200',
  },
  {
    id: '13',
    title: 'Not so good location',
    type: 'apartment',
    price: 20,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 6,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 6,
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    previewImage: 'https://picsum.photos/260/200',
  },
  {
    id: '2',
    title: 'Exelent & beautiful hostel',
    type: 'room',
    price: 2100,
    city: {
      name: 'Brussels',
      location: {
        latitude: 21.35514938496378,
        longitude: 99.35514938496378,
        zoom: 3,
      }
    },
    location: {
      latitude: 21.35514938496378,
      longitude: 99.35514938496378,
      zoom: 3,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://picsum.photos/260/200',
  },
  {
    id: '3',
    title: 'Beautiful house in the forest',
    type: 'house',
    price: 900,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 74.35514938496378,
        longitude: 55.35514938496378,
        zoom: 7,
      }
    },
    location: {
      latitude: 74.35514938496378,
      longitude: 55.35514938496378,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://picsum.photos/260/200',
  },
  {
    id: '4',
    title: 'Tiny apartment with beautiful view',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 65.35514938496378,
        longitude: 50.35514938496378,
        zoom: 2,
      }
    },
    location: {
      latitude: 65.35514938496378,
      longitude: 50.35514938496378,
      zoom: 7,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    previewImage: 'https://picsum.photos/260/200',
  },
];
