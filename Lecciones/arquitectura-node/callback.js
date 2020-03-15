const asyncCallback = function(cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'hello world') // Envio primeor error, luego resultado
    } //50% de veces no hay error, y 50% si
    else {
      cb(new Error('hello console.error();'))
    }
  }, 2000)
}

asyncCallback((err, msg) => {
  if (err) {
    console.log('error', err);
  } // si existe error lo imprime
  else {
    console.log('message', msg);
  } //sino existe error imprime bien
}) //lo que esta adentro es cb
