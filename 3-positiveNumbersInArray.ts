function getPositives(arr: number[]): number[] {
  let finalArray = arr.filter((value) => value >= 0)
  return finalArray
}

let initArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arrWithPositiveValues = getPositives(initArr);
console.log(arrWithPositiveValues); //should return: [10,12,5,90,0,1]
