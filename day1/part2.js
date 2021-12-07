//0 199  A
//1 200  A B
//2 208  A B C
//3 210    B C D
//4 200  E   C D
//5 207  E F   D
//6 240  E F G
//7 269    F G H
//8 260      G H
//9 263        H


// Start by comparing the first and second three-measurement windows.
// The measurements in the first window are marked A (199, 200, 208);
// their sum is 199 + 200 + 208 = 607.

// The second window is marked B (200, 208, 210);
// its sum is 618.

// The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.

const { input } = require('./inputParser');

function loopMeasurements() {
  let previousSum;
  let incrementCount = 0;
  input.map((num, index, arr) => {
    const sumOfA = sumOfWindow(arr, index);
    const sumOfB = sumOfWindow(arr, index+1);

    if (sumOfA > 0 && sumOfB > 0 && sumOfB > sumOfA) {
      incrementCount++;
    }
  });

  console.log(incrementCount);
}

function sumOfWindow(arr, index) {
  if (arr[index] && arr[index+1] && arr[index+2]) {
    return arr[index] + arr[index+1] + arr[index+2];
  }

  return null;
}


loopMeasurements();