import filterRestaurants from "./leetcode-1333-Filter-Restaurants";

const example1 = {
  input: {
    restaurants: [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    veganFriendly: 1,
    maxPrice: 50,
    maxDistance: 10,
  },
  output: [3, 1, 5],
};
const example2 = {
  input: {
    restaurants: [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    veganFriendly: 0,
    maxPrice: 50,
    maxDistance: 10,
  },

  output: [4, 3, 2, 1, 5],
};
const example3 = {
  input: {
    restaurants: [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    veganFriendly: 0,
    maxPrice: 30,
    maxDistance: 3,
  },
  output: [4, 5],
};

test("Testing Example 1: ", () => {
  const {
    input: { restaurants, veganFriendly, maxPrice, maxDistance },
    output,
  } = example1;
  expect(
    filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)
  ).toStrictEqual(output);
});

test("Testing Example 2: ", () => {
  const {
    input: { restaurants, veganFriendly, maxPrice, maxDistance },
    output,
  } = example2;
  expect(
    filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)
  ).toStrictEqual(output);
});

test("Testing Example 3: ", () => {
  const {
    input: { restaurants, veganFriendly, maxPrice, maxDistance },
    output,
  } = example3;
  expect(
    filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)
  ).toStrictEqual(output);
});
