function getArrayParams(...arr) {
  let min = - Infinity;
  let max = Infinity;
  let sum = 0;
  min = Math.min (...arr);
  max = Math.max (...arr);
  for ( let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let avg = +((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    } 
  }  
  if (countEvenElement === 0) return 0;
  return +(sumEvenElement/countEvenElement).toFixed(2);
}

function makeWork (arrOfArr, func) {
  let maxWorkResult= -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    const result = func (...arrOfArr[i]);
    if (result > maxWorkResult) {
      maxWorkResult = result;
      }
    }
  return maxWorkResult;
}