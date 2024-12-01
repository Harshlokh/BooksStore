// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.get('/books.json', (req, res) => {
//     const isAdmin = req.query.isAdmin === 'true';
//     fs.readFile('./books.json', (err, data) => {
//         if (err) {
//             res.status(500).send('Error reading file');
//         } else {
//             const books = JSON.parse(data);
//             if (isAdmin) {
//                 res.json(books.filter(book => book.isAdminAccessible));
//             } else {
//                 res.json(books);
//             }
//         }
//     });
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });