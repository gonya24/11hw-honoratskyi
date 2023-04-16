let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let valueMin = (arr[0] || 0), serialNumber = 0; 
for (i=0; i<arr.length; i++){
    if (valueMin>arr[i]) {
        valueMin = arr[i];
    }
}
serialNumber = arr.indexOf(valueMin) 
console.log (`Minimal element: ${valueMin}\nSerial number: ${serialNumber}`);