let logic = (arr, sum) => {
    let returnum = [];
    let results = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (returnum[arr[i]]) {
        results.push([returnum[arr[i]], arr[i]]);
      } else {
        returnum[sum - arr[i]] = arr[i];
      }
    }
    return results;
  };
  
  console.log(logic([1, 2, 3, 4,5,6], 10));