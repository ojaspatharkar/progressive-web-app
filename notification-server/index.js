const express = require('express') 
const cors = require('cors') 
const path = require('path');
const bodyParser = require('body-parser')
const app = express() 
const port = 4000 
app.use(cors()) 
app.use(bodyParser.json()) 
app.use(express.static(path.join(__dirname, 'pwa-client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/pwa-client/build/index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))