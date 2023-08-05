import {TReviews} from '../types/reviews';

export const reviews: TReviews = [
  {
    id: 'f98a1496-9bba-491e-8cad-d5ae88903676',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2023-07-01T21:00:00.382Z',
    rating: 3,
    user: {
      name: 'Corey',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/3.jpg',
      isPro: false
    }
  },
  {
    id: '4b6dacc4-e59c-42e2-a3ef-4159790d2a90',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-07-01T21:00:00.382Z',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/2.jpg',
      isPro: true
    }
  },
  {
    id: '1c5cfb7b-f357-4a28-9c08-24306ecc7cbc',
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2023-06-30T21:00:00.382Z',
    rating: 2,
    user: {
      name: 'Zak',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/9.jpg',
      isPro: true
    }
  },
];
