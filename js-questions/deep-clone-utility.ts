// creating a deep clone utility function
// for primitives, arrays, plain objects, date, set, map, cyclic references and shared references

export function deepClone<T>(value: T, cache = new WeakMap()): T {
  // handle primitives and functions
  if (value === null || typeof value !== "object") {
    return value;
  }

  // handle cyclic references
  if (cache.has(value)) {
    return cache.get(value) as T;
  }

  // handle Date
  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  // handle Set
  if (value instanceof Set) {
    const clonedSet = new Set();
    cache.set(value, clonedSet);
    for (const item of value) {
      clonedSet.add(deepClone(item, cache));
    }

    return clonedSet as T;
  }

  // handle Map
  if (value instanceof Map) {
    const clonedMap = new Map();
    cache.set(value, clonedMap);
    for (let [key, val] of value.entries()) {
      clonedMap.set(deepClone(key, cache), deepClone(val, cache));
    }

    return clonedMap as T;
  }

  // handle arrays
  if (Array.isArray(value)) {
    const clonedArray: Array<T> = [];
    cache.set(value, clonedArray);
    for (let item of value) {
      clonedArray.push(deepClone(item, cache));
    }

    return clonedArray as T;
  }

  // handle plain objects
  const clonedObject = {};
  cache.set(value, clonedObject);
  for (let key in value) {
    // @ts-ignore
    clonedObject[key] = deepClone(value[key], cache);
  }

  return clonedObject as T;
}
