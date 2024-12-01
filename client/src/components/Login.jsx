import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f5f5;
  
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-x:10px;
  & input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;
    font-size: 16px;
  }

  & button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      const token = res.data?.token;
      localStorage.setItem("token", token);
      if (res && token) {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LoginContainer className="bg-[url('https://img.freepik.com/premium-photo/teenager-boy-holding-paper-book-standing-public-library-bookshelf-glowing-light-background-young-adult-man-reading-shop-close-up_260913-2896.jpg')] bg-cover bg-center h-screen w-screen">
      <h1 className="special text-2xl md:text-3xl lg:text-5xl -mt-[100px] text-white  ">Login</h1>

      <LoginForm action="POST" className="mt-10" onSubmit={submit}>
        <h1 className="spec text-2xl">Enter your email:</h1>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
        <h1 className="spec text-2xl mt-3">Enter Password :</h1>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </LoginForm>
      <p className="text-xl text-white underline">or</p>
      <Link to={"/signup"} className="text-white hover:text-red-600 sm:text-2xl spec mb-5 underline font-bold  hover:decoration-red-600 decoration-green-400">Not registered yet? click here to signup</Link>
      <a href="/admin" ><button className="bg-[#61cf70] px-3 text-sm rounded-md py-1 text-white ">Admin login</button> </a>

    </LoginContainer>
  );
};

export default Login;
