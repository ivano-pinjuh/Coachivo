import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"

import { AuthContext } from "./supabase/auth-context"
import { CoursesContext } from "./supabase/courses-context"

import supabase from "./supabase/supabase"

function App() {
  const [currentUser, setCurrentUser] = useState({isSignedIn: false})
  const [coursesData, setCoursesData] = useState([])

  const getData = async () => {
    try {
      const { data, error } = await supabase.from('courses').select("*")
      if (error) {
        throw error
      }
      
      setCoursesData(data)
    } 
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <CoursesContext.Provider value={{coursesData, setCoursesData}}>

        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

        </Routes>

      </CoursesContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
