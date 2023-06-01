const sayHello = function(message) {
  console.log(`Hello there ${message}`) ;
}

// const returnVal = sayHello('frank')
// console.log(returnVal);

const a = 5 
const b = a 

const copy = sayHello;
// copy('frank');

const runMyFunc = function(anotherFunc){
  console.log(anotherFunc);
}

runMyFunc(sayHello(`frank`));
runMyFunc(console.log);
