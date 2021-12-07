const { input, sampleInput } = require('./inputParser');

function calculatePosition() {
  let horizontalPosition = 0;
  let verticalPosition = 0;

  for(command of input) {
    const [direction, unit] = command.split(' ');

    if (direction === 'forward') {
      horizontalPosition += parseInt(unit);
    } else if (direction === 'up') {
      verticalPosition -= parseInt(unit);
    } else {
      verticalPosition += parseInt(unit);
    }

  }
  console.log(horizontalPosition*verticalPosition);
}

calculatePosition();