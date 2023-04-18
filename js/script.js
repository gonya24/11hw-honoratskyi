// 1 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let counter = 0, data = 0 ;
// console.log(arr);
// for (i=0; i < arr.length; i++) {
//     if (arr[i]>0) {
//         counter++;
//         data +=arr[i];

//     }
// }
// console.log (`Count positive element: ${counter}\nTotal sum: ${data}`);
// 
//2 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let valueMin = (arr[0] || 0), serialNumber = 0; 
// for (i=0; i<arr.length; i++){
//     if (valueMin>arr[i]) {
//         valueMin = arr[i];
//     }
// }
// serialNumber = arr.indexOf(valueMin) 
// console.log (`Minimal element: ${valueMin}\nSerial number: ${serialNumber}`);
// 
// 3 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let valueMin = (arr[0] || 0), serialNumber = 0; 
// for (i=0; i<arr.length; i++){
//     if (valueMin>arr[i]) {
//         valueMin = arr[i];
//     }
// }
// serialNumber = arr.indexOf(valueMin) 
// console.log (`Minimal element: ${valueMin}\nSerial number: ${serialNumber}`);
// 
// 4 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let counter = 0
// console.log(arr);
// for (i=0; i < arr.length; i++) {
//     if (arr[i]<0) {
//         counter++; 
//     }
// }
// console.log (`Count negative element: ${counter}`);
// 
// 5 task 
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let counter = 0
// console.log(arr);
// for (i=0; i < arr.length; i++) {
//     if (arr[i]%2!=0 && arr[i]>0) {
//         counter++;   
//     }
// }
// console.log (`Count unpaired positive element: ${counter}`);
// 
// 6 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let counter = 0
// console.log(arr);
// for (i=0; i < arr.length; i++) {
//     if (arr[i]%2==0 && arr[i]>0) {
//         counter++;   
//     }
// }
// console.log (`Count paired positive element: ${counter}`);
// 
// 7 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let data = 0 ;
// console.log(arr);
// for (i=0; i < arr.length; i++) {
//     if (arr[i]>0 && arr[i]%2==0) {
//         data +=arr[i];
//     }
// }
// console.log (`Total sum paired positive elements: ${data}`);
// 
// 8 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let data = 0 ;
// console.log(arr);
// for (i=0; i < arr.length; i++) {
//     if (arr[i]>0 && arr[i]%2!=0) {
//         data +=arr[i];
        
//     }
// }
// console.log (`Total sum unpaired positive elements: ${data}`);
// 
// 9 task 
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let data = 0 ;
// console.log(arr);
// for (i=0; i < arr.length; i++) {
//     if (arr[i]>0) {
//         data =(data+1) * arr[i] -1;
        
//     }
// }
// console.log (`Total multiply positive elements: ${data}`);
// 
// 10 task
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// arr.sort((a,b) => b-a); //Sort from max to min value
// arr.splice(1) //reset all value from 1 elem. of array

// console.log (`Only max value of array: ${arr}`);