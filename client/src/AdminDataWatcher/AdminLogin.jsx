import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Libmanager' && password === 'Lib#123') {
      setIsAdmin(true);
      navigate('/APD');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div >
      <div className=''>
      <section className='flex relative justify-center'>
      <div className="flex flex-col  items-center  justify-center ">    
      <div
  className="bg-[url('https://img.freepik.com/premium-photo/teenager-boy-holding-paper-book-standing-public-library-bookshelf-glowing-light-background-young-adult-man-reading-shop-close-up_260913-2896.jpg')] bg-cover bg-center h-screen w-screen"
>

       <form onSubmit={handleLogin} className='flex flex-col  justify-center items-center'>
 
       <h1 className='mt-10 md:mt-20 text-2xl md:text-3xl lg:text-6xl xl:text-8xl special mb-10 text-white'>Admin Login</h1>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5 mb-5'>
        <h1 className='text-2xl spec font-bold  '>UserName :</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className='h-4 w-full sm:w-[230px] rounded-lg sm:h-8 p-3'
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
        <h1 className='text-2xl spec font-bold'>Password :</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='adminpassword h-4 w-full sm:w-[230px] rounded-lg sm:h-8 p-3'
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='bg-[#61cf70] text-white hover:bg-green-500 px-6 py-1 rounded-lg mt-4'>Login</button>
      </form>
      </div> 
      </div>
      </section>
    </div>
    </div>
  );
};

export default AdminLogin;
