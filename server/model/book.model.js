const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authorName: { type: String, required: true },
  coverImg: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
