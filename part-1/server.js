const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', function (request, response) {
  response.send('Hello Phase 3')
})

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())




app.get('/api/days/:day', function (request, response) {

  const daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }

  let day = request.params.day

  console.log('------------------------------------');
  console.log('day', day);
  console.log('------------------------------------');

  response.header( 'Content-Type', 'application/text' )

  if(daysOfWeek.hasOwnProperty(`${day}`)) {
    console.log('day+++', day)
    response.json( daysOfWeek[`${day}`])
  } else {
    response.json(`'${day}' is not a valid day!`)
    response.status(400)
  }
})


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
