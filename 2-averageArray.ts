function averageArray(arr: number[]): number {
    let n = arr.length;
    let sum = 0;
    let average: number;

	sum = arr.reduce((acc, currentValue) => acc + currentValue, sum)
    average = sum / n
        
    return average
}

let array2 = [1, 3, 9, 15, 90];
let avg = averageArray(array2);

console.log("Average:" , avg);  //should return: Average: 23.6