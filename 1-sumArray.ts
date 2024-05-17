function sumArray(arr: number[]): number {
  var sum = 0;
  sum = arr.reduce((acc, currentValue) => acc + currentValue, sum);
  return sum;
}

let array1 = [2, 3, -1, 5, 7, 9, 10, 15, 95];
console.log(sumArray(array1))