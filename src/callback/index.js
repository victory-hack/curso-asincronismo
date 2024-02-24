function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2,2,sum));

console.log(calc(2,2,(num1, num2) => {
  return num1 * 3;
}));

setTimeout(() => {
  console.log('Hola JavaScript')
}, 2000);

function gretting(name, lastName) {
  console.log(`Hola ${name} ${lastName}`)
}

setTimeout(gretting, 2000, "Victor Hugo", "Canete");

setTimeout((num1, num2) => {
  console.log(num1 + num2);
}, 5000, 1,2);

