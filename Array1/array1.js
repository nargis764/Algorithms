//Problem 1

const pushFront = (array1,item) => {

for (i = array1.length-1; i >= 0; i--) {
    array1[i+1] = array1[i];
}
array1[0]= item;
return array1;
}

console.log(pushFront([2,34,76,34,28],19))



//Problem 2

const popFront = (array2) => {

const poppedItem = array2.pop();

for (i = 1; i <= array2.length-1; i++) {
    array2[i-1] = array2[i];
}

array2[array2.length-1] = poppedItem;

return array2;
}

console.log(popFront([10,20,30,40,50,60]))

//Problem 3

const insertAt = (array3,k,val) => {


for (i = array3.length-1; i >= k; i--) {
    array3[i+1] = array3[i];
}

array3[k] = val;

return array3;
}

console.log(insertAt([10,20,40,50,60],2,30))

//Problem 4

const removeAt = (array4,k) => {


for (i = k+1; i <= array4.length-1; i++) {
    array4[i-1] = array4[i];
}

array4.pop();

return array4;
}

console.log(removeAt([10,20,30,40,50],2))
