
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

