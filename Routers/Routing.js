//CONTROLLER
const express = require('express');
const { addListener } = require('../Model/Model');
const router = express.Router();
const itemSchemaName = require('../Model/Model');

router.get('/', async(req, res) => {
    try{
        const modelObj = await itemSchemaName.find()
        res.json(modelObj)
    } catch (err){
        res.send('Error ')
    }
})

router.post('/', async(req, res) => {
    const modelObj = new itemSchemaName({
        name: req.body.name,
        tech: req.body.tech,
        sub : req.body.sub
    })

    try{

        const a1 = await modelObj.save();
        res.json(a1)
    } catch(err){
        res.send('Error POST => '+ err);
    }
})

router.get('/:id', async(req, res) => {
    try{
        const modelObj = await itemSchemaName.findById(req.params.id)
        res.json(modelObj)
    } catch (err){
        res.send('Error ' + err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const modelObj = await itemSchemaName.findById(req.params.id)
        modelObj.tech = req.body.tech
        const a1 = await modelObj.save()
        res.json(a1)
    } catch (err){
        res.send('Error ' + err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const modelObj = await itemSchemaName.findById(req.params.id)
        const a1 = await modelObj.delete()
        res.json(a1)
    } catch (err){
        res.send('Error ' + err)
    }
})

module.exports = router