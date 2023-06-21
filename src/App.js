import React from 'react'
import {Route, Routes} from "react-router-dom"

// css
import "./index.css"
import "./css/style.css"

// components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="px-48">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
