const { input } = require('./inputParser');

function loopMeasurements() {
  const increased = input.filter((num, index, arr) => {
    let previousNumber = arr[index--] || arr[0];
    return num > arr[index--];
  });

  console.log(increased.length);
}


loopMeasurements();