import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Header  from "./components/header/Header"
import  Home  from "./pages/home/Home"
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App
