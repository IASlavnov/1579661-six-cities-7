import { SortType } from '../const';

const sortPriceLowToHigh = (offers) => offers.sort((offerA, offerB) => offerA.price - offerB.price);
const sortPriceHighToLow = (offers) => offers.sort((offerA, offerB) => offerB.price - offerA.price);
const sortByRating = (offers) => offers.sort((offerA, offerB) => offerB.rating - offerA.rating);

export const setSort = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_TO_HIGH:
      return sortPriceLowToHigh(offers);
    case SortType.PRICE_TO_LOW:
      return sortPriceHighToLow(offers);
    case SortType.TOP_RATED:
      return sortByRating(offers);
    default:
      return offers;
  }
};
