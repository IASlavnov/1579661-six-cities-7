export const updateAllOffers = (offers, updatedOffer) => {
  const idx = offers.findIndex((offer) => offer.id === updatedOffer.id);

  if (idx === -1) {
    return offers;
  }

  const updatedOffers = [
    ...offers.slice(0, idx),
    updatedOffer,
    ...offers.slice(idx + 1),
  ];

  return updatedOffers;
};
