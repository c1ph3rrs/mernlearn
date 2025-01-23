const express = require('express');
const app = express();
const port = 3000;

const items = require('./router/items');

const authMiddleware = function (req, res, next) { 
    console.log("Auth middleware running");
    next();        ;
}

app.use(authMiddleware)
app.use('/api/data', items);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
