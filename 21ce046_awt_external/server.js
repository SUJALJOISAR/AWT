import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './config/db.js';
import Book from './models/book.js';
import bookController from './src/bookController.js';
import auth from './routes/auth.js';
import book from './routes/books.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Library Home Page');
});

module.exports = router;
