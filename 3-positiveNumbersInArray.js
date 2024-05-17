function getPositives(arr) {
    var finalArray = arr.filter(function (value) { return value >= 0; });
    return finalArray;
}
var initArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arrWithPositiveValues = getPositives(initArr);
console.log(arrWithPositiveValues); //should return: [10,12,5,90,0,1]
