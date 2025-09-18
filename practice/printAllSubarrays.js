// this is a practice question where I will print all sub-arrays of an array with recursion

// your code goes here

// returning all the subarrays using recursion

function subArray(arr, mySet = new Set(), myArr = []) {
  if (arr.length === 0) return mySet;

  for (let i = 0; i < arr.length; i++) {
    let myNewArr = [...myArr];
    let uniqueValue = arr.slice(i, i + 1);
    if (!myNewArr.includes(uniqueValue[0])) myNewArr.push(uniqueValue[0]);
    let leftArr = arr.slice(i + 1, arr.length);

    mySet.add(JSON.stringify(uniqueValue));
    mySet.add(JSON.stringify(myNewArr));
    mySet.add(JSON.stringify(leftArr));
    subArray(leftArr, mySet, myNewArr);
  }

  return mySet;
}

console.log([...subArray([3, 1, 2])].map((item) => JSON.parse(item)));
