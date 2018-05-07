const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//parses the body of the request - makes available in req.body
app.use(bodyParser.json())

//Create a profile object to update/return to user
let profile = [{
	id: 11,
	first: "Isiah",
	last: "Thomas"
}]

app.get("/profile",(req,res) => {
	if(req.query.id) return res.send(profile[req.query.id])
	res.send(profile)
})

app.post("/profile",(req,res) => {
	profile.push(req.body)
	console.log('created',profile)
	res.sendStatus(201)
})

app.put('/profile/:id',(req,res) => {
	//Express sets req.params.id for us 
	Object.assign(profile[req.params.id], req.body) //this merges the fields, could be a partial update
	console.log('updated',profile[req.params.id])
	res.sendStatus(204)
})

app.delete('/profile/:id',(req,res) => {
	profile.splice(req.params.id,1) //replace 1 element at req.params.id index?
	console.log('deleted',profile[req.params.id])
	res.sendStatus(204)
})

app.listen(3000)