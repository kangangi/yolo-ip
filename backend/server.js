const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();


const productRoute = require('./routes/api/productRoute');


// Initializing express
const app = express()

// Connecting to the Database
const mongoHost = process.env.MONGO_HOST
const mongoPort = process.env.MONGO_PORT || 27017;
const dbName = process.env.MONGO_DB || 'yolomy';

const mongoURI = `mongodb://${mongoHost}:${mongoPort}/${dbName}`;

mongoose.connect(mongoURI ,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
    console.log(error);
})




// Body parser middleware
app.use(express.json())

// 
app.use(upload.array()); 

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute)

// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
