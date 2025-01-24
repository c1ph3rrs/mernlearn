const express = require('express');
const app = express();
const connectDB = require('./db');

const port = 3000;


app.use(express.json());

connectDB();

const items = require('./router/items');

const authMiddleware = function (req, res, next) { 
    console.log("Auth middleware running");
    next();        
}

app.use(authMiddleware)
app.use('/api/data', items);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
