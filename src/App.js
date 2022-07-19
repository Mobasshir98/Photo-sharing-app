import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from 'react';
import Main from './Component/Main';
import Landing from './Component/landing';
import Post from './Component/post';

// const users = [
//   {
//     "name": "Siva",
//     "location": "Bengaluru",
//     "likes": 64,
//     "description": "Kick start your career",
//     "PostImage": "https://images.unsplash.com/photo-1586941599398-41f017a00a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     "date": "10 Jan 2022"
//   },
//   {
//     "name": "Siva",
//     "location": "Bengaluru",
//     "likes": 64,
//     "description": "Kick start your career",
//     "PostImage": "https://images.unsplash.com/photo-1652608243085-a867d2dd7f64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     "date": "10 Jan 2022"
//   },
//   {
//     "name": "Ayan Hassan",
//     "location": "Pune",
//     "likes": "1M",
//     "description": "Kick start your career",
//     "PostImage": "https://images.unsplash.com/photo-1652553064276-ec35a5e6a266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     "date": "10 Jan 2022"
//   }
// ]


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/post" element={<Post/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
