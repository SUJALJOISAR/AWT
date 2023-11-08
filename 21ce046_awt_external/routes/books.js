import express from 'express';
import router from '../routes/auth.js';
import bookController from '../src/bookController.js'

router.post('/books', bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', bookController.updateBookById);
router.delete('/books/:id', bookController.deleteBookById);
router.get('/library', bookController.someFunction);

export default router;