var sum = function (array) {
  return array.length === 0 ? 0 : array[0] + sum(array.splice(1));
};

console.log(sum([2, 4, 6]));

var sum2 = (array) => (array.length === 0 ? 0 : array[0] + sum(array.slice(1)));

console.log(sum2([2, 4, 6]));
