// polyfill of flat

Array.prototype.myFlat = function (depth = 3) {
  let result = [];
  this.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(item.myFlat(depth - 1));
    } else {
      result.push(item);
    }
  });

  return result;
};
