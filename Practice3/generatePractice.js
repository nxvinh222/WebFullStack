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
      item.input.push(getRandomInt(-10000, 10000));
    }

    if (i == 0){
      item.target = 10001;
      item.output = -1 ;
    }
    else if (i == 1){
      item.target = item.input[0];
      item.output = 0;
    }
    else if (i == 2){
      item.target = item.input[item.input.length-1];
      item.output = item.input.length-1;
    }
    else if (i == 3){
      item.target = item.input[2];
      item.output = 2;
    }
    else {
      item.target = getRandomInt(-10000, 10000);
      item.output = search(item.input, item.target);
    }



    //item.target = (getRandomInt(-10000, 10000));
    //item.output = search(item.input, item.target);


    object.push(item);
  }
  return object;
}

module.exports = generate
