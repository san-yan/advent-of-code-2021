const { input, sampleInput } = require('./inputParser');

function loopMeasurements() {
  let incrementCount = 0;

  for(i = 0; i < input.length; i++) {
    const sumOfA = sumOfWindow(i);
    const sumOfB = sumOfWindow(i+1);

    if (sumOfA > 0 && sumOfB > 0 && sumOfB > sumOfA) {
      incrementCount++;
    }
  }

  console.log(incrementCount);
}

function sumOfWindow(index) {
  const arr = input;
  if (arr[index] && arr[index+1] && arr[index+2]) {
    return arr[index] + arr[index+1] + arr[index+2];
  }

  return null;
}


loopMeasurements();