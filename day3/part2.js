const { input, sampleInput } = require('./inputParser');

function calculate() {
  const oxygen = loopBinaries('oxygen');
  const co2 = loopBinaries('co2');


  console.log(parseInt(oxygen[0],2) * parseInt(co2[0],2));
}

function loopBinaries(type) {
  const lengthOfBinary = input[0].length;
  const sizeOfInput = input.length;
  let listOfBinaries = input;

  for(let i = 0; i < lengthOfBinary; i++) {
    let filteredNumbers = getByNumber(listOfBinaries, i, 0);

    if (type === 'oxygen') {
      listOfBinaries = filteredNumbers.length > (listOfBinaries.length/2)
        ? filteredNumbers
        : getByNumber(listOfBinaries, i, 1);
    } else {
      listOfBinaries = filteredNumbers.length > (listOfBinaries.length/2)
        ? getByNumber(listOfBinaries, i, 1)
        : filteredNumbers;
    }

    if (listOfBinaries.length === 1) {
      return listOfBinaries;
    }

  }

  return listOfBinaries;
}

function getByNumber(arr, i, numberToCheckFor) {
  return arr.filter((num) => {
    let num_arr = num.split('');
    return parseInt(num_arr[i]) === numberToCheckFor
  })
}


calculate();