const promise1 = () => Promise.resolve("First");
const promise2 = () => Promise.resolve("Second");
const promise3 = () => Promise.resolve("Third");

promise1()
  .then((result1) => {
    console.log(result1); // First
    return promise2();
  })
  .then((result2) => {
    console.log(result2); // Second
    return promise3();
  })
  .then((result3) => {
    console.log(result3); // Third
  });
