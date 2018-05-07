const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//parses the body of the request - makes available in req.body
app.use(bodyParser.json())

//Create a profile object to update/return to user
let profile = {
	id: 11,
	first: "Isiah",
	last: "Thomas"
}

app.get("/profile",(req,res) => {
	res.send(profile)
})

app.post("/profile",(req,res) => {
	profile = req.body
	console.log('created',profile)
	res.sendStatus(201)
})

app.put('/profile',(req,res) => {
	Object.assign(profile, req.body) //this merges the fields, could be a partial update
	console.log('updated',profile)
	res.sendStatus(204)
})

app.delete('/profile',(req,res) => {
	profile = {}
	console.log('deleted',profile)
	res.sendStatus(204)
})

app.listen(3000)