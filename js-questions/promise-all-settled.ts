// here we'll write the polyfill for Promise.allSettled

function allSettled<T>(
  promises: Array<Promise<T>>
): Promise<Array<{ status: string; value?: T; reason?: any }>> {
  return new Promise((resolve) => {
    const results: Array<{ status: string; value?: T; reason?: any }> = [];
    let settledCount = 0;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          results.push({ status: "fulfilled", value });
        })
        .catch((reason) => {
          results.push({ status: "rejected", reason });
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });

    if (promises.length === 0) {
      resolve(results);
    }
  });
}
