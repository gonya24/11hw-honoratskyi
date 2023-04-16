let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let arrMax =[];
console.log(arr)
for(i=0; i<arr.length; i++) { //loop for creature new array 
    arrMax.push(arr[i]);
}

arrMax.sort((a,b) => b-a); // Sorted array
arrMax.splice(1,arrMax.length);

console.log (`Only max value of array: ${arrMax}`);