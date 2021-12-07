const { input, sampleInput } = require('./inputParser');

function calculatePosition() {
  let horizontalPosition = 0;
  let verticalPosition = 0;
  let aim = 0;

  for(command of input) {
    let [direction, unit] = command.split(' ');
    unit = parseInt(unit);

    if (direction === 'forward') {
      horizontalPosition += unit;
      verticalPosition += aim*unit;
    } else if (direction === 'up') {
      aim -= unit;
    } else {
      aim += unit;
    }
  }
  console.log(horizontalPosition*verticalPosition);
}

calculatePosition();