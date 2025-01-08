require('dotenv').config()

const PORT = process.env.PORT //eslint-disable-line

const MONGODB_URI = process.env.NODE_ENV === 'test' //eslint-disable-line
  ? process.env.TEST_MONGODB_URI //eslint-disable-line
  : process.env.MONGODB_URI //eslint-disable-line


module.exports = {
  MONGODB_URI,
  PORT
}