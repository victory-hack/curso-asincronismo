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

const delay = (time, message) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(message)
    }, time);
  })
}

delay(2000, 'Hello after 2s').then(result => { console.log(result)})