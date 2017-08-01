const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/', (request, response) => {
  response.send('Simple web app')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

app.get('/api/days/:day', (request, response) => {
  let day = request.params.day

  if(daysOfWeek.hasOwnProperty(`${day}`)) {
    response.set('Content-Type', 'application/text') // test content-type
    response.status(200).send(
      'request: GET '
      + `${request.path}` 
      + '\n'
      + 'response: ' 
      + `${daysOfWeek[day]}` 
      + '\n' 
      + 'status: ' 
      + `${response.statusCode}` 
    )
  } else {
    response.set('Content-Type', 'application/text') // test content-type   
    response.status(400).send(
      'request: GET '
      + `${request.path}`
      + '\n'
      + 'response: '
      + `'${day}' is not a valid day!`
      + '\n'
      + 'status: '
      + `${response.statusCode}`
    )
  }
})

app.post('/api/array/concat', (request, response) => {
  const { array1, array2 } = request.body
  const resultArray = array1.concat(array2)

  if(Array.isArray(resultArray)) {
    // response.set('Content-Type', 'application/json') 
    response.json({
      'request': 'POST ' + request.path,
      'request body params': request.body,
      'request content type': request.rawHeaders[15],
      'response': {'result': resultArray}
    })
  } else { 
    // response.set('Content-Type', 'application/json')    
    response.status(400).json({
      'request': 'POST ' + request.path,
      'request body params': request.body,
      'request content type': request.rawHeaders[15],
      'response status code': response.statusCode,
      'response': {'error': 'Input data should be of type Array'}
    })
  }
})


app.listen(3000, ( error, cb ) => {
  if(error) throw error
    console.log('Listening on port 3000!')
})

