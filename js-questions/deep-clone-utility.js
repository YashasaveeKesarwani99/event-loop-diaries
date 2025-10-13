function deepClone(value, map = new WeakMap()) {
  // Handle null or primitive types
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle circular references
  if (map.has(value)) {
    return map.get(value);
  }

  // Handle Date
  if (value instanceof Date) {
    return new Date(value);
  }

  // Handle Array
  if (Array.isArray(value)) {
    const clonedArr = [];
    map.set(value, clonedArr);
    value.forEach((item, i) => {
      clonedArr[i] = deepClone(item, map);
    });
    return clonedArr;
  }

  // Handle Object
  const clonedObj = {};
  map.set(value, clonedObj);
  Object.keys(value).forEach((key) => {
    clonedObj[key] = deepClone(value[key], map);
  });
  return clonedObj;
}
