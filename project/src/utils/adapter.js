export const adaptOffer = (offer) => ({
  ...offer,
  host: {
    ...offer.host,
    avatarUrl: offer.host.avatar_url,
    isPro: offer.host.is_pro,
  },
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  maxAdults: offer.max_adults,
  previewImage: offer.preview_image,
});

export const adaptOffers = (offers) => offers.map(adaptOffer);

export const adaptComment = (comment) => ({
  ...comment,
  user: {
    ...comment.user,
    avatarUrl: comment.user.avatar_url,
    isPro: comment.user.is_pro,
  },
});

export const adaptComments = (comments) => comments.map(adaptComment);
