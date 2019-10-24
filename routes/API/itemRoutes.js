const express = require('express');
const router = express.Router();

//Item Model 
const Item = require('../../models/Items');
// @route  GET api/items
// @desc   Get All Items 
// @access Public 
router.get('/', (req,res) =>{
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})

// @route  POST api/items
// @desc   Create  Items 
// @access Public 
router.post('/', (req,res) =>{
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
})

// @route  Delete api/items
// @desc   Delete  Items 
// @access Public 
router.delete('/:id', (req,res) =>{
    Item.findById({_id: req.params.id})
    .then(item => item.remove())
    .then((item) => res.json({succes: true}))
    .catch(err => res.status(404).json({succes: false}))
})


module.exports = router; 