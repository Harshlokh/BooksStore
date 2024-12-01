import React, { useState } from 'react';

function BorrowForm() {

  return (
    <section className='flex flex-col justify-center items-center gap-10'>
      <h1>Fill this small form and borrow the book</h1>
      <form >
        <h1>Name: <input type="text" name="name" className='border border-black mb-3 sm:w-[300px]'  /></h1>
        <h1>Date: <input type="date" name="date" className='border border-black mb-3 sm:w-[300px]'  /></h1>
        <h1>Time: <input type="time" name="time" className='border border-black mb-3 sm:w-[300px]'  /></h1>
        <h1>Book Name: <input type="text" name="bookName" className='border border-black mb-3 sm:w-[300px]' /></h1>
        <button className='border border-black px-3 rounded-lg py-1'>Submit</button>
      </form>
    </section>
  );
}

export default BorrowForm;
