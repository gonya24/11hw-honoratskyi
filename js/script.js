var arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let counter = 0
console.log(arr);
for (i=0; i < arr.length; i++) {
    if (arr[i]%2==0 && arr[i]>0) {
        counter++;   
    }
}
console.log (`Count paired positive element: ${counter}`);