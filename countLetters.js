const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
  }
};

const countLetters = function(sentence) {
  let count = {};
  for (const str of sentence) {
    if (str !== " ") {
      if (count[str]) {
        count[str] += 1;
      } else {
        count[str] = 1;
      }
    }
  }
  return count;
};
console.log(countLetters("lighthouse in the house"));