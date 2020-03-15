const EventEmitter = require('events')
class Logger extends EventEmitter {
  execute(cb) {
    console.log('Before')
    this.emit('start') //emite evento inicio
    cb() //lama callback si los definos
    this.emit('finish') //emite evento finalización
    console.log(Áfter)
  } // le creo el metodo execute a la nueva clase Logger
} //trae logger propio

const logger = new Logger()

logger.on('start', () => console.log('Starting'))
logger.on('finish', () => console.log('Finishing'))
logger.on('finish', () => console.log('it\'s Done'))

logger.execute(() => console.log('Hello world');)
