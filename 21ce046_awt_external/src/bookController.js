import Book from "../models/book.js";
exports.createBook = async (req, res) => {
    
    try {
        const { ISBN, genre, author, title } = req.body;
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: 'Error in creating book', error });
    }
};


exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ message: 'Error in fetching books', error });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: 'Error in fetching book', error });
    }
};

exports.updateBookById = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: 'Error in updating book', error });
    }
};

exports.deleteBookById = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error in deleting book', error });
    }
};