// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';  // Added 'dotenv' for environment variables
// import authRoutes from './routes/auth.js';
// import bookRoutes from './routes/books.js';

// dotenv.config();

// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//   console.log(error);
// });

// database.once('connected', () => {
//   console.log('Database Connected');
// });

// const app = express();

// app.use(bodyParser.json());
// app.use(express.json());
// // const authRoutes = require('./routes/auth').default; // Change how you import authRoutes
// // const bookRoutes = require('./routes/books').default; // Change how you import bookRoutes

// app.use('/auth', authRoutes);
// app.use('/books', bookRoutes);

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server Running on port ${port}`);
// });



import express from 'express';

const app = express();

const bookRoutes = require('./routes/books');



app.use(express.json());
app.use('/api', bookRoutes);

// const express = require('express');
const bodyParser = require('body-parser');

// const app = express();

app.use(bodyParser.json());

module.exports = app;

