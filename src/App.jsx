import { Routes, Route } from "react-router-dom"

import Navbar from "./components/layout/Navbar"

import Home from "./components/pages/Home"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      
      <Routes>
        <Route path="/" element={<div></div>} />

      </Routes>
    </>
  )
}

export default App
