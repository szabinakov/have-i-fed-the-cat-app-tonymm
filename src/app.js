// In src/app.js add this code:
const express = require('express');
const { Cat } = require('./models');

const app = express();

// we expect to have to parse json from request bodies, 
// so we need the JSON middleware
app.use(express.json());

// we will put our routes and controller functions here

app.post('/cats',async (req, res) => {
const cat = await Cat.create(req.body)
  res.status(201).json(cat);
});

app.get('/cats',async (req, res) => {
    const cat = await Cat.findAll({ where: req.query })
      res.status(200).json(cat);
    });

app.get('/cats/:catId',async (req, res) => {
    const cat = await Cat.findByPk(req.params.catId)
        res.status(200).json(cat);
    });

app.patch('/cats/:catId',async (req, res) => {
    const cat = await Cat.update(req.body, { where: { id: req.params.catId } })
        res.status(200).json(cat);
    });

module.exports = app;