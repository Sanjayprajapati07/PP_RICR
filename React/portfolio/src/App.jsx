import React from 'react'
import "./App.css";
import Header from './components/header';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/home';
import Experience from "./pages/experience";
import Project from "./pages/project";
import Hobbies from "./pages/hobbies";
import Qualification from "./pages/qualification";
import { motion } from "framer-motion";

function App(){
  return(
    <>
    <Router>
      <header/>
        <Header/>
        <main className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exp' element={<Experience/>}/>
          <Route path='/pro' element={<Project/>}/>
          <Route path='/con' element={<Contact/>}/>
          <Route path='/hob' element={<Hobbies/>}/>
          <Route path='/Qli' element={<Qualification/>}/>
        </Routes>
        </main>
    </Router>
    
    </>
  )
}

export default App;
