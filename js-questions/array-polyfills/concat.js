// polyfill of concat

Array.prototype.myConcat = function (...args) {
  const result = [...this];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      result.push(...args[i]);
    } else {
      result.push(args[i]);
    }
  }

  return result;
};
