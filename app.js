const express = require('express');
const app = express();


app.use(function(req,res,next) {
  console.log("Request Type: ", req.method)
  next()
}),

app.get("/", (req,res) =>
  res.send("Welcome to Twitter")
),




app.listen(3000, () => console.log('Server Listening!'))