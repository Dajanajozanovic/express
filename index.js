import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('hello')
})

app.listen(3000, function () {
  console.log('app listening to port 3000')
})
