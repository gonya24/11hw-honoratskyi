let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

arr.sort((a,b) => b-a); //Sort from max to min value
arr.splice(1) //reset all value from 1 elem. of array

console.log (`Only max value of array: ${arr}`);