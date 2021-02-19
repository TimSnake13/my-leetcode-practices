function swap(arr: number[][], index1: number, index2: number) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSortReverse(arr: number[][]) {
  let endIndex = arr.length - 1;
  while (endIndex > 0) {
    let swaps = 0;
    let currentIndex = 0;
    while (currentIndex < endIndex) {
      if (arr[currentIndex][1] < arr[currentIndex + 1][1]) {
        swap(arr, currentIndex, currentIndex + 1);
        swaps++;
      }
      currentIndex++;
    }
    if (swaps === 0) break;
    endIndex--;
  }
  return arr;
}

export default function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  // 1. Filtering
  const filtered = restaurants.filter(
    (restaurant: number[]) =>
      restaurant[2] === veganFriendly &&
      restaurant[3] <= maxPrice &&
      restaurant[4] <= maxDistance
  );
  console.log(filtered);
  // 2. Rank from highest rating to lowest, return only IDs
  const result = bubbleSortReverse(filtered).map((v) => v[0]);
  console.log(result);

  return result;
}
