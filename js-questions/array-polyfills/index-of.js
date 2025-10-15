// polyfill of indexOf

Array.prototype.myIndexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) return i;
  }

  return -1;
};
