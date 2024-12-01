const express = require('express');
const router = express.Router();
const Book = require('../model/book.model');

// Fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
});

// Borrow a book
router.post('/borrow/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    if (!book.available) {
      return res.status(400).json({ message: 'Book is already borrowed' });
    }

    book.available = false;
    await book.save();
    res.status(200).json({ message: 'Book borrowed successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error borrowing book', error });
  }
});

module.exports = router;
