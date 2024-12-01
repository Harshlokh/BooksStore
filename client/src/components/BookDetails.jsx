import React from "react";
import { useBookContext } from "./BookContext"; // Import the context

const BookDetails = () => {
  const { selectedBook, setSelectedBook } = useBookContext();

  if (!selectedBook) return null; // If no book is selected, show nothing

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white  w-11/12 md:w-3/4 lg:w-1/2 rounded-lg p-6 shadow-lg relative">
        <button
          onClick={() => setSelectedBook(null)} // Close details view
          className="absolute top-1 right-1  h-[50px]  text-white border-2 border-red-800 bg-red-600 hover:text-green-100 text-5xl  font-bold"
        >
          &times;
        </button>
        <img
          src={selectedBook.coverImg}
          alt={`${selectedBook.authorName}'s book`}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{selectedBook.authorName}</h1>
       <div className="flex justify-between items-center">
       <p className="text-gray-700 mb-4">Price: ${selectedBook.price}</p>
   <a href="/add">  <button className="bg-green-400 text-md mx-2 px-2 py-2 rounded-xl hover:bg-green-700">Get Book</button> </a>

       </div>
        <p className="text-gray-600">
          <strong>Description:</strong> This is a placeholder description for
          the book. You can replace it with real data if available.
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
