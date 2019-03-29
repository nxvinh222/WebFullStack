'use strict'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function search(input, target) {
  //return  input.indexOf(target);  // Remove this line and change to your own algorithm
  for (let i = 0; i < input.length; i++)
  {
      if (input[i] == target)
        return i;
  }
  return -1;
}

const object = [];
function generate(testLengthArray){
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
  for (let i = 0; i < testLengthArray.length; i++){
    //item.input.length = 0;
    let item = {
      input: [],
      target: 0,
      output: -1,
    };
    for (let j = 0; j < testLengthArray[i]; j++){
      //console.log(testLengthArray[i]);
      item.input.push(getRandomInt(-10, 10));
    }
    item.target = (getRandomInt(-10, 10));
    item.output = search(item.input, item.target);

    object.push(item);
  }
  return object;
}

module.exports = generate
