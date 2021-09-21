const args = process.argv.slice(2);
console.log(args);

// create a timer function
// loop through the array and sort it
// add edge case conditions
// add setTimeOut 

const timer = function() {
  // assigning a variable to our command args
  let inputArray = args;
  // edge cases
  // check if input is negative number
  let hasNegative = inputArray.some(num => num < 0);
  if ((inputArray.length === 0) && (hasNegative)) {
    return;
  }
  // check is input is not a number
  // if(isNaN(inputArray)) {
  //   return;
  // }
  // sorting the array
  inputArray.sort((a,b) => {
    return a - b;
  });
  console.log("sorted:", inputArray);
// looping the array
  for (let x = 0; x < inputArray.length; x ++) {
    console.log(inputArray[x])
    console.log([x])
    setTimeout(() => {
      process.stdout.write('\x07');
    }, inputArray * 1000)
  }

}

timer();

