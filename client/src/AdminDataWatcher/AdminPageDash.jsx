import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const AdminPageDash = ({ pages, isAdmin, deletePage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStartedRef = useRef(null);

  return (
    <div>
      <div className="flex flex-wrap relative justify-center gap-11">
        <Link to="/add">
          <button className="bg-[#61cf70] text-white hover:bg-green-600 px-6 py-2 rounded-lg mt-4">
            Add User
          </button>
        </Link>
        <Link to="/home">
          <button className="bg-blue-500 text-white hover:bg-blue-700 px-6 py-2 rounded-lg mt-4">
            Go to Home
          </button>
        </Link>
        {!isAdmin && (
          <Link to="/admin">
            <button className="bg-red-500 text-white hover:bg-red-700 px-6 py-2 rounded-lg mt-4">
              Login to make Changes
            </button>
          </Link>
        )}
      </div>
      
      <div className="mt-20">
        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
          <h1 className="special text-2xl md:text-3xl lg:text-5xl">Search Name of the User</h1>
          <input
            className="border-2 border-gray-400 px-7 py-1 rounded-md"
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-8 mt-8 p-4">
        {filteredPages.map((page, index) => (
          <div
            key={index}
            className="page-item bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <h2 className="text-black text-xl font-semibold mb-2">{page.title}</h2>
            <p className="text-gray-600 mb-1">Book Name: {page.bookname}</p>
            <div className="text-gray-500">Date: {page.bdate}</div>
            <div className="text-gray-500">Time: {page.btime}</div>
            
            {isAdmin && (
              <button
                className="bg-red-500 text-white hover:bg-red-600 mt-4 py-2 px-4 rounded-lg transition-colors"
                onClick={() => deletePage(index)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPageDash;
