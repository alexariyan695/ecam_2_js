function prependToArray(arr, newItem) {
  const newArray = [newItem, ...arr];
  return newArray;
}


const originalArray = [2, 3, 4];
const newArray = prependToArray(originalArray, 1);

console.log(originalArray);
console.log( newArray); 