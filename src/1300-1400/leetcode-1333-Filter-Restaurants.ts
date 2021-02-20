export default function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  return restaurants
    .filter((restaurant) => {
      return (
        (!veganFriendly || veganFriendly === restaurant[2]) &&
        maxPrice >= restaurant[3] &&
        maxDistance >= restaurant[4]
      );
    })
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      } else {
        return b[0] - a[0];
      }
    })
    .map((restaurant) => restaurant[0]);
}
