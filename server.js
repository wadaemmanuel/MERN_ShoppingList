const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/API/itemRoutes');
const app = express();

//BodyParser middleware 
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// connect to mongo 
mongoose.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//use routes
app.use('/api/items',itemRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`🌎  ==> Server started on port: ${port}`));