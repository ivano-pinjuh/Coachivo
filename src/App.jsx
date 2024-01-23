import Navbar from "./components/layout/Navbar"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="m-0 overflow-x-visible">
        <img className="h-[100vh] md:h-[120vh] -translate-y-4" src="/banner1.jpg" alt="" />
      </div>
      
      <Routes>
        <Route path="/" element={<div></div>} />

      </Routes>
    </>
  )
}

export default App
