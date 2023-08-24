import {SortingOffers} from '../const';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityOffer = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityOffer;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Offers = Offer[];

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type FullOffer = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type SizeOptions = {
  small: {width: string; height: string};
  large: {width: string; height: string};
};

export type TSorting = keyof typeof SortingOffers;
