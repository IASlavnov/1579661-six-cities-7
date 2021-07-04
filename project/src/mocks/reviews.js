import { nanoid } from 'nanoid';

const reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: nanoid(),
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2019-06-08T14:13:56.569Z',
    id: nanoid(),
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(),
      isPro: false,
      name: 'Angelina',
    },
  },
  {
    comment: 'Lorem ipsum dolor sit amet.',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Max',
    },
  },
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    date: '2019-08-08T14:13:56.569Z',
    id: nanoid(),
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Angelina',
    },
  },
];

export default reviews;
