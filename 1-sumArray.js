var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
function sumArray(arr) {
    var sum = 0;
    sum = arr.reduce(function (acc, currentValue) { return acc + currentValue; }, sum);
    return sum;
}
console.log(sumArray(array_of_numbers));
