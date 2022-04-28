const express = require('express')
const path = require('path')

const app = express()


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fcd6fd019ed846d3b2794dbe9d731107',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))