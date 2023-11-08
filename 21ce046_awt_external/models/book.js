import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  ISBN: { type: String, unique: true },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
