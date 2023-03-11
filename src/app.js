const express = require('express');
const { Cat } = require('./models');

const app = express();

app.use(express.json());

app.post('/cats',async (req, res) => {
    await Cat.create(req.body)
    .then((cat) => res.status(201).json(cat))
    .catch((err) => {
        console.error('error', err);
        res.status(400).json({ error: 'Bad Request' });
    });
});

app.get('/cats',async (req, res) => {
    await Cat.findAll({ where: req.query })
    .then((cat) => res.status(201).json(cat))
    .catch((err) => {
        console.error('error', err);
        res.status(400).json({ error: 'Bad Request' });
    });
});

app.get('/cats/:catId',async (req, res) => {
    await Cat.findByPk(req.params.catId)
    .then((cat) => res.status(201).json(cat))
    .catch((err) => {
        console.error('error', err);
        res.status(400).json({ error: 'Bad Request' });
    });
});

app.patch('/cats/:catId',async (req, res) => {
    await Cat.update(req.body, { where: { id: req.params.catId } })
    .then((cat) => res.status(201).json(cat))
    .catch((err) => {
        console.error('error', err);
        res.status(400).json({ error: 'Bad Request' });
    });
});

app.patch('/feeds/cats/:catId',async (req, res) => {
    await Cat.update({ lastFed: new Date()}, { where: { id: req.params.catId }})
    .then((cat) => res.status(201).json(cat))
    .catch((err) => {
        console.error('error', err);
        res.status(400).json({ error: 'Bad Request' });
    });
});   

app.delete('/cats/:catId',async (req, res) => {
    await Cat.destroy({ where: { id: req.params.catId }})
    .then((cat) => res.status(201).json(cat))
    .catch((err) => {
        console.error('error', err);
        res.status(400).json({ error: 'Bad Request' });
    });
});   

module.exports = app;