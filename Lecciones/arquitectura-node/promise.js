const promise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('hello world') //callback a .then
    } //50% de veces no hay error, y 50% si
    else {
      reject(new Error('hello error')) //callback a .err
    }
  }, 2000)
})

promise
  .then(msg => msg.toUpperCase()) //encadeno promesas para hacer transformaciones
  .then(msg => console.log('message', msg))
  .catch(err => console.log('message', err))
