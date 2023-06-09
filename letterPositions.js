// const letterPositions = function(sentence) {
//   const results = {};
//   // logic to update results here
//   for (let i = 0; i < sentence.length; i++) {
//     const str = sentence[i];
//     if (str !== " ") {
//       if (results[str]) {
//         results[str].push(i);
//       } else {
//         results[str] = [i];
//       }
//     }
//   }
//   return results;
// };

// Gary J method

const letterPositions = function(str) {
  const results = {};

  for (const i in str) {
    const letter = str[i];
    if (letter === " ") {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }
    //happy path
    results[letter].push(i);
  }
};

// expected = {
//   H: [0],
//   e: [1],
// }


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // let match = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
  }
};


console.log(letterPositions("Hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
