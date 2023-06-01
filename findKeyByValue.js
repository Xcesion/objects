const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`)
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`)
  };
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(param, val){
  let obKey = Object.keys(param)
  for (const str of obKey) {
    if (param[str] === val){
      return str; 
    }
  }
  return undefined;
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);