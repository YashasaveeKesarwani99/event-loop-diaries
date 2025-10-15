// polyfill for reduce

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue ? initialValue : this[0];

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
