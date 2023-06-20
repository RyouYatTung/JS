function mergeSortedArr(arr1, arr2) {
  const mergedArr = [];
  let arr1item = arr1[0];
  let arr2item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1item || arr2item) {
    // console.log(arr1, arr2);
    if (!arr2 || arr1item < arr2) {
      mergedArr.push(arr1item);
      arr1item = arr1[i];
      i++;
    } else {
      mergedArr.push(arr2item);
      arr2item = arr1[j];
      j++;
    }
  }

  return mergedArr;
}

console.log(mergeSortedArr([12, 124, 33, 1], [3, 42, 5, 2, 5]));
