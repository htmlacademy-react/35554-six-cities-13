import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Wood and stone place',
    type: 'Private Room',
    price: 90,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: 'House',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Hotel',
    price: 160,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/room.jpg'
  }
];
