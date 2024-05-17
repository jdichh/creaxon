function averageArray(arr) {
    var n = arr.length;
    var sum = 0;
    var average;
    sum = arr.reduce(function (acc, currentValue) { return acc + currentValue; }, sum);
    average = sum / n;
    return average;
}
var array2 = [1, 3, 9, 15, 90];
var avg = averageArray(array2);
console.log("Average:", avg); //should return: Average: 23.6
