import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';

const App = () => {
   useEffect(() => {
    const handleRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleRightClick);
    return () => document.removeEventListener("contextmenu", handleRightClick);
  }, []);
  return (
  <>
  <Header/>
  <Main/>
  <Footer/>
  </>
  )
}

export default App
