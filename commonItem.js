//COMMON ITEM: return true if a recurrence exists inside arrays

const array1 = ['a','b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for ( let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    // implement map with arr1 values
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) { 
    //check if item in second array exists on created object. 
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

containsCommonItem(array1, array2);
containsCommonItem2(array1, array2);
containsCommonItem3(array1, array2);