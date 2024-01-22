import Navbar from "./components/layout/Navbar"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<div></div>} />

      </Routes>
    </>
  )
}

export default App
