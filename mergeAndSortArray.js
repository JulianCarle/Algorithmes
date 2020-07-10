// MERGE AND SORT TWO ARRAYS

function mergeArrayAndSort1(array1, array2){
    //Check inputs
    if(array1.length === 0) {
        return array2;
        }
    if(array2.length === 0) {
        return array1;
    }
    const mergedArray = [];
    for (i=0; i<array1.length; i++){
        mergedArray.push(array1[i])
    }
    for (j=0; j<array2.length; j++){
        mergedArray.push(array2[j])
    }
    mergedArray.sort((a,b) => a - b)
    return mergedArray
}

const mergeArrayAndSort2 = (array1, array2) => {
    return array1.concat(array2).sort((a,b) =>  a - b);
}

function mergeSortedArrays(array1, array2){ //here, array1 and array2 must be already sorted 
    //Check inputs
    if(array1.length === 0) {
        return array2;
        }
    if(array2.length === 0) {
        return array1;
    }
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item){
        if(array2Item === undefined || array1Item < array2Item){
        mergedArray.push(array1Item);
        array1Item = array1[i];
        i++;
        }   
        else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
        j++;
        }
    }
    return mergedArray;
}
  
  
  mergeArrayAndSort1([100,3,4,31], [3,0,6,-5]);
  mergeArrayAndSort2([100,3,4,31], [3,0,6,-5]);
  mergeSortedArrays([-40,0,3,4,31], [-20,4,6,30]);