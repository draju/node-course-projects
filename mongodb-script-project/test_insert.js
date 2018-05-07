const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

/* Original example code from EdX based on mongo v2
// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the DB server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    db.close()
  })
})
*/

//Vishnu: not changes below for mongo v3.0
//now must retrieve db from client and call close on client
// Connection URI
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (err, client) => {
  if (err) return process.exit(1)
  let db = client.db('edx-course-db')
  console.log('Kudos. Connected successfully to server')
  insertDocuments(db, () => {
  	client.close()
  })
})

//Insert Documents
const insertDocuments = (db, callback) => {
  // Get reference to edx-course-docs collection
  const collection = db.collection('edx-course-students')
  // Insert 3 documents
  collection.insert([
    {name : 'Bob'}, {name : 'John'}, {name : 'Peter'} // 3 documents
  ], (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 3
    console.log(result.ops.length) // will be 3
    console.log('Inserted 3 documents into the edx-course-students collection')
    callback(result)
  })
}