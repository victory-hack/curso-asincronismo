const promise = new Promise((resolve, rejected) => {
  resolve('Hey!')
})

const cows = 5;

const countCows = new Promise((resolve, rejected) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`)
  } else {
    rejected(`There is no cows on the farm`)
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error)
}).finally(() => {
  console.log('Finally')
})