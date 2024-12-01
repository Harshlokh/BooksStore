import React, { useState, useEffect } from "react";
import axios from "axios";
import { useBookContext } from "./BookContext"; // Import the context

function BookApp() {
 
  
  const [books, setBooks] = useState([]); // State to store books
  const [isAdmin, setIsAdmin] = useState(false); // Track if admin is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const { setSelectedBook } = useBookContext(); // Use context to set selected book

  // Fetch books from JSON file
  useEffect(() => {
    axios
      .get("/books.json") // Adjust the path if necessary
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  // Handle book click
  const handleBookClick = (book) => {
    setSelectedBook(book); // Set selected book in context
  };

  return (
    <div className="p-6 text-white mx-auto bg-[url('https://www.pbs.org/wgbh/masterpiece/wp-content/uploads/2020/08/mystery-book-feature-icon-1920x1080-1.jpg')]  bg-cover bg-center h-[500px] sm:h-[630px] w-screen ">
    
    <span className="flex flex-row justify-center gap-20 items-center">
    <div className="flex flex-col justify-center ">
    <h1 className="special text-3xl md:text-4xl lg:text-6xl mt-10">Pyramid the <br/> Ancient History</h1>
    <p className="text-sm sm:text-xl mt-3 font-bold ">Existing stories and much more on the greatest book <br/>of all time Zatura .</p>
    <p className="special text-3xl mt-5 sm:mt-10">₹12000</p>
   <a href="/add"><button className="mt-4 sm:mt-10 mb-28 px-4 text-[10px] sm:text-sm w-[6rem] mx-2 my-2 sm:w-[10rem] rounded-lg py-2 bg-green-400 hover:bg-green-600 ">Borrow now</button></a>
    </div>
    
    <div>
      <img
       src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/amun-from-pantheon-egyptien-1823-1825-by-leon-jean-joseph-dubois-1780-1846-les-classics.jpg"
        className="h-[30rem] opacity-90 w-auto hidden lg:block" />
    </div>
    </span>

    <div className="special  uppercase text-black flex sm:mt-[125px] mt-24 flex-col justify-center items-center ">
      <h1 className="text-xl text-center sm:text-2xl ">Best Selling Books</h1>
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl xl:text-6xl ">Weekly best seller</h1>
    </div>
      {/* Display Books */}
      <div className="grid gap-6 mt-5 justify-center items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   ">
        {books.map((b) => (
          <div
            key={b.id}
            className="bg-[#fcfcfc] p-4 px-5 flex justify-center items-center flex-col  text-center cursor-pointer"
            onClick={() => handleBookClick(b)} // Set book details in context
          >
            <img
              src={b.coverImg}
              alt={`${b.authorName}'s book`}
              className="w-auto h-[230px] object-cover  mb-4"
            />
            <h2 className="text-xl special font-bold">{b.authorName}</h2>
            <p className="text-gray-700">Price: ${b.price}</p>
           <button className="text-sm border-[3px] border-gray-300 px-3 mt-4 text-gray-600 py-1">Borrow now</button>
          </div>
        ))}
      </div>
      <div className="bg-[#61cf70] mt-8">
      <a href="/admin" ><button className="bg-[#61cf70] px-3 text-sm rounded-md py-1 text-[#61cf70] ">Admin login</button> </a>
      </div>
      <div className="bg-[#61cf70] px-2 py-2  text-white font-medium flex justify-center items-center  ">
        Copyright- Harsh Books librarymanagement system
      </div>
    </div>
  );
}

export default BookApp;
