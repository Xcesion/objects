const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`);
  }
};


const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1); // object1 : fruits: apple , bread : toast
  let object2Keys = Object.keys(object2);//  object2 : bread : toast , fruits: apple
  if (object1Keys.length === object2Keys.length) {
    for (const key1 in object1) {
      if (key1 in object2 && object1[key1] === object2[key1]) { // checking the keys with obj1 and obj2
        return true;// see if line 15 from what we selected the keys of value are the same
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);