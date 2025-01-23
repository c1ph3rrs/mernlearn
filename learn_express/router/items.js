const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    console.log('Item get method called');
})



router.post('/items', (req, res) => {
    console.log("itemsPost method running");
});

router.put('items:id', (req, res) => { 
    console.log("Put method running");
});

router.delete('items:id', (req, res) => { 
    console.log("Delete method running");
});


module.exports = router;