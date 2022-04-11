//Problem 1

const reverseArray = (array1) => {
    let startIndex = 0;
    let endIndex = array1.length-1;

    while(startIndex < endIndex) {    
        temp = array1[startIndex];
        array1[startIndex] = array1[endIndex];
        array1[endIndex] = temp;
        startIndex ++;
        endIndex --;
    }
    return array1;
}

console.log(reverseArray([4,5,6,7,8,9,10]))


//Problem 2

const rotateArray = (array2, k) => {
    let l = array2.length;
    k %= l;
    
    reverse(array2, 0, l-1);
    reverse(array2, 0, k-1);
    reverse(array2, k, l-1);
    return array2;
}

const reverse = (arr, start, end) => {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start ++;
        end --;
    }
}

console.log(rotateArray([4,5,6,7,8,9,10],3))

// Problem 3

let newarr = [];

const filterArray = (array3) => {
    let startat = 0;

    for (let i = 0; i <= array3.length-1; i++) {
    if (array3[i] > 5 && array3[i] <9) {
        newarr[startat] = array3[i];
        startat ++ ;
    }
}
    array3.length = startat;
    return newarr;
}

console.log(filterArray([4,5,6,7,8,9,10]))

// Problem 4

const concat = (firstarray, secondarray) => {
    let startindex = firstarray.length;

    for(let i = 0; i <= secondarray.length-1; i++) {
        firstarray[startindex] = secondarray[i];
    //firstarray.push(secondarray[i]) ;
    //console.log(secondarray[i])    
    startindex ++;
    }
    return firstarray;
}

console.log(concat([5,6,7],[8,9,10]))


