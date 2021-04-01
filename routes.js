const express = require('express');
const ITEMS = require('./items');
const Item = require('./item');
const Item = require('../express-shopping-list-solution/item');
const router = new express.Router();

router.get('/items', (req, res) => {
    try {
	    return res.json({ items: ITEMS });
    } catch (err) {
        return next(err);
    }
});

router.get('/items/:name', (req, res) => {
    try {
        const findItem = ITEMS.find(i => i.name === +req.params.name);
        return res.json({ item: findItem})
    } catch (err) {
        return next(err);
    }
});

router.post('/items', (req, res) => {
    try {
        let newItem = new Item(res.body.name, res.body.price);
        return res.json({ item: newItem });
    } catch (err) {
        return next(err);
    }
})

module.exports = router;