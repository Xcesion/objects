
const raisinAlarm = function (cookie) {
  // Put your solution here
  let alert = "All good!";
  for(let chip of cookie) {
    // console.log(i)
    if(chip === "🍇"){
      alert = "Raisin alert!";
      // console
    }
  }
  return alert;
};

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
    // Put your solution here
    let alert = [];
    for (const cookie of cookies) {
      // let output = "Raisin alert!"
      // const output = raisinAlarm(cookie);
      // for (let j = 0; j < cookies[i].length; j++) {
      //     if (cookies[i][j] === "🍇") {
      //         output = "Raisin alert!";
      //     } 
      // }
      alert.push(raisinAlarm(cookie));
    }
    // console.log(alert)
    return alert;
  };
  
  console.log(raisinAlarmArray([
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"],
    ]));



const myObject = {
  a: 6,     // Number
  b: "abc", // String
  c: true,  // Boolean
  d: null,  // Null
};


// const person = {
//   name: "Paul",
//   address: {
//     street: "310 W 95th",
//     city: "New York",
//     zipCode: 10027
//   }
// };

// person["phoneNumbers"] = 6045881234
// console.log(person["phoneNumbers"] instanceof String);
// const spam = "spam";
// person["dislikes"] = { food: spam, "e-mail": "spam" }

// console.log(person)


// var planetMoons = {
//   mercury: 0,
//   venus: 0,
//   earth: 1,
//   mars: 2,
//   jupiter: 67,
//   saturn: 62,
//   uranus: 27,
//   neptune: 14
// };

// for (var planet in planetMoons) {
//   var numberOfMoons = planetMoons[planet];
//   console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
// }