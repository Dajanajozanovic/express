import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('hello')
})

app.get('/error', function (req, res) {
  throw new Error('oops I made a mistake')
})

app.use(function (req, res) {
  res.status(404).send('not found')
})

app.listen(3000, function () {
  console.log('app listening to port 3000')
})
