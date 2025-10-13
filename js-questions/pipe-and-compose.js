/**
 * - compose runs functions right-to-left.
 * - The output of one function becomes the input of the previous function in the chain.
 * - Often used in functional programming to apply transformations in a nested way.
 *
 * - pipe runs functions left-to-right.
 * - It's like a readable pipeline: the output of one function is passed to the next.
 * - Often preferred for readability.
 */

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

// usage

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;

const composedFn = compose(add2, multiply3);
const pipedFn = pipe(add2, multiply3);
