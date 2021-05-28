import express from 'express'

const router = express.Router()

router.get('/', function (rep, res) {
  res.send('hello routes')
})

export default router
