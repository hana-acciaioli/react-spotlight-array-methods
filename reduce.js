// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};
// for loop solution:

// export const getSneaks = (brands) {
//     fpr (let brand of brands) {
//     let sneaks = [...sneaks, ...brand.shoes];
// }
// return sneaks;
// }

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  return dogs.reduce((acc, dog) => (acc += dog.age), 0) / dogs.length;
};
