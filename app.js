//import the express package
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;

//initialize a new express instance equal to the app object
const app = express();

//route handler that sends back a response
app.get('/home', (req, res) =>{
    res.send("Hello, World!");
});
//route handler for post request using path parameter

app.post('/response', (req, res)=>{
      const user_id = req.params.id;
    res.send('This is the post response in Restful style');
});

//Route with query parameter
app.get('/search', (req, res) =>{
       const query = req.query.q;
       res.send(`Search query is ${query}`);
});

//Start our server, listening on port 8080
app.listen(PORT, () =>{
    console.log(`Connected on port ${PORT}`);
});