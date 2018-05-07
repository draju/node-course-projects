const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//parses the body of the request - makes available in req.body
app.use(bodyParser.json())

//runs for all routes - allows you to do logging in just one place
app.use((req, res, next) => {
  console.log(`${req.method} : ${req.url}`)
  next()
})

app.use((req, res, next) => {
  //in real-world scenario, you would have to validate api key against DB
  //can test by including api_key=XYZ in query string with curl -i
  if(req.query.api_key){
  	next()
  }
  else{
  	res.status(401).send({msg: 'Not authorized'})
  }

})

app.get('/',(req,res) => {
	res.send({msg:'Hello world'})
})

app.get('/accounts',(req,res) => {
	res.send({msg:'accounts'})
})

app.get('/transactions',(req,res) => {
	res.send({msg:'transactions'})
})

//Add for this exercise to accept POST request
app.post('/transactions',(req,res) => {
	console.log(req.body)
	res.send({msg:'transactions'})
})

//Here is an example of defining middleware inline for a specific route
app.get('/route5',(req, res, next) => {
	console.log('Executing inline middleware for route5')
	next()
},(req,res) => {
	res.send({msg:'route5'})
}
)

//Here is an example of defining middleware inline that throws an error
app.get('/route6',(req, res, next) => {
	console.log('Executing inline middleware for route6')
	next(new Error('error thrown for route6'))
},(req,res) => {
	res.send({msg:'route6'})
}
)

//Error handler - specify 4 arguments: error,req,res,next
app.use((error, req, res, next) => {
	res.status(500).send(error)
})


app.listen(3000)