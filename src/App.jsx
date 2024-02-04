import { Routes, Route } from "react-router-dom"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"

import { AuthContext } from "./supabase/auth-context"
import { useState } from "react"

function App() {

  const [currentUser, setCurrentUser] = useState({isSignedIn: false})

  return (
    <AuthContext.Provider 
      value={{currentUser,
            setCurrentUser}}>

      <Navbar />
      
      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
    </AuthContext.Provider>
  )
}

export default App
