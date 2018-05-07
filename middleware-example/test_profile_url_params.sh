curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"id":"33", "first":"Grant", "last":"Hill"}' localhost:3000/profile
sleep 1
curl -H "Content-Type: application/json" -X PUT -d '{"id":"33", "first":"HOFER Grant", "last":"Hill"}' "localhost:3000/profile/0"
sleep 1
curl "http://localhost:3000/profile?id=0"
sleep 1
curl -X DELETE "http://localhost:3000/profile/0"
