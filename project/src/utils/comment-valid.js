const MIN_LENGTH = 50;
const MAX_LENGTH = 300;
const MIN_RATING = 0;

export const commentIsValid = (comment, rating) => (comment.length > MIN_LENGTH) && (comment.length < MAX_LENGTH) && (rating > MIN_RATING);
