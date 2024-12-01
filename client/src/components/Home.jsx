import React from "react";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";
import BookApp from "./BookApp";
import BookDetails from "./BookDetails";
import { BookProvider } from "./BookContext";


const Logout = styled.button`
  background-color: #bf0e0e;
  color: #fff;
  border: transparent;
  margin: 10px;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c14646;
  }

  &:active {
    transform: scale(0.85);
  }
`;

const Home = () => {
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  let email = "";

  if (token) {
    const decodedToken = jwt_decode(token);
    email = decodedToken.email;
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div className="bg-[#61cf70] px-2 py-3 flex justify-between items-center  ">
        <div>
          <img src="/logos.png" className="h-[40px] hidden sm:block " />
        </div>
        <div className="text-lg mr-5 text-white">    <h1> Welcome to the home! : {email}</h1>
        </div>
      </div>
    <span className="flex flex-col sm:flex-row  justify-between  p-2 sm:text-lg font-bold items-center gap-2 md:gap-20">
      <div className="flex flex-row gap-1 justify-center items-center">
       <img src="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds" className="h-[60px] w-auto" />
      <a href="/home"><h1 className="font-extrabold text-5xl special cursor-pointer">Books</h1></a> 
      </div>
      <div className="flex flex-col  md:text-sm lg:text-lg md:flex-row justify-center items-center gap-2 md:gap-10 hover:cursor-pointer">
      <h1 className="hover:underline decoration-black">Home</h1>
      <h1 className="hover:underline decoration-black">Special Editions</h1>
      <h1 className="hover:underline decoration-black">About us</h1>
      <h1 className="hover:underline decoration-black">Contact</h1>
      <Logout onClick={logout}>Logout</Logout>
      
      </div>
    </span>
    <div className="flex flex-col justify-center items-center gap-10 ">
    <BookProvider>
      <BookApp />
      <BookDetails />
    </BookProvider>
     
      </div>
    
   
    </div>
  );
};

export default Home;
