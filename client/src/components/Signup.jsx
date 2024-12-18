import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f5f5;
`;
const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top:60px;
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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });
      // Navigate to login after signup
      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupContainer  className="bg-[url('https://img.freepik.com/premium-photo/teenager-boy-holding-paper-book-standing-public-library-bookshelf-glowing-light-background-young-adult-man-reading-shop-close-up_260913-2896.jpg')] bg-cover bg-center h-screen w-screen">
      <h1 className="special text-2xl md:text-3xl lg:text-5xl -mt-[100px] text-white  ">SignUp</h1>

      <SignupForm action="POST" onSubmit={submit}>
      <h1 className="spec text-2xl">Enter your email:</h1>

        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
                <h1 className="spec text-2xl">Enter your Password:</h1>

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing up" : "Signup"}
        </button>
      </SignupForm>
      <p>or</p>
      <Link className="text-white spec font-bold text-2xl underline decoration-green-400 hover:decoration-red-600 hover:text-red-600" to={"/"}>Already registered? click here to login</Link>
    </SignupContainer>
  );
};

export default Login;
