const { input, sampleInput } = require('./inputParser');

function calculate() {
  const lengthOfBinary = input[0].length;
  const sizeOfInput = input.length;
  let gammaRate = "";
  let epsilon = "";

  for(let i = 0; i < lengthOfBinary; i++) {
    let zeroCount = getZeroes(i);

    let newGammaValue = zeroCount.length > (sizeOfInput/2) ? 0 : 1;

    gammaRate = gammaRate.concat(newGammaValue);
    epsilon = epsilon.concat(newGammaValue === 0 ? 1 : 0);
  }

  console.log(parseInt(gammaRate,2) * parseInt(epsilon,2));
}

function getZeroes(i) {
  return input.filter((num) => {
    let num_arr = num.split('');
    return parseInt(num_arr[i]) === 0
  })
}


calculate();