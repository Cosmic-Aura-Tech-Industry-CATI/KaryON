import React from 'react'
import { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import './assets/Components/Footer.css';


import './App.css'

const Home = lazy(() => import("./assets/Pages/Home"));
const Services = lazy(() => import("./assets/Pages/Services"));
const Signup = lazy(() => import("./assets/Pages/Signup"));
const Contact = lazy(() => import("./assets/Pages/Contact"));
const Login = lazy(() => import("./assets/Pages/Login"));
const About = lazy(() => import("./assets/Pages/About"));
const Howitworks = lazy(() => import("./assets/Pages/Howitworks"));
const Blog = lazy(() => import("./assets/Pages/Blog"));
const Mybooking = lazy(() => import("./assets/Pages/Mybooking"));
const HomeCleaning = lazy(() => import("./assets/Pages/HomeCleaning"));

function App() {
  
  return (
    <>
      <div className="app">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/howitworks" element={<Howitworks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bookings" element={<Mybooking />} />
            <Route path="/cleaning" element={<HomeCleaning />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
