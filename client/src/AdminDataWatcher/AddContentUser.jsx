import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContentUser = ({ addPage }) => {
  const [title, setTitle] = useState('');
  const [bookname, setBookname] = useState('');
  const [bdate, setBdate] = useState('');
  const [btime, setBtime] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPage(title,bookname, bdate,btime);
    navigate('/home');  // Redirect to the home page after adding content
  };

  return (
    <div className="py-10 flex justify-center items-center bg-[url('https://img.freepik.com/premium-photo/teenager-boy-holding-paper-book-standing-public-library-bookshelf-glowing-light-background-young-adult-man-reading-shop-close-up_260913-2896.jpg')] bg-cover bg-center h-screen w-screen ">
    <div className="w-full max-w-lg p-8 text-white bg-[#8d8e9e] rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center mb-8">Add your Details</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <h3 className="text-2xl font-semibold  mb-2">Enter your name</h3>
          <input
            type="text"
            className="w-full px-4 py-2 text-black font-bold  rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="User Name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold  mb-2">Enter Book Name</h3>
          <input
            type="text"
            className="w-full px-4 py-2 text-black font-bold rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Book Name"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
            required
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold  mb-2">Enter Date of borrow</h3>
          <input
            type='date'
           className="w-full px-4 py-2 text-black font-bold  rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Date..."
            value={bdate}
            onChange={(e) => setBdate(e.target.value)}
            required
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold  mb-2">Enter Time of borrow</h3>
          <input
            type='time'
           className="w-full px-4 py-2 text-black font-bold  rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Date..."
            value={btime}
            onChange={(e) => setBtime(e.target.value)}
            required
          />
        </div>
        

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#61cf70] text-white hover:bg-green-500 px-6 py-1 rounded-lg mt-4"
          >
            Confirm Borrow
          </button>
        </div>
      </form>
    </div>
  </div>
  
  
  
  );
};

export default AddContentUser;
