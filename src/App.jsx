import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import Courses from "./components/pages/Courses"
import Course from "./components/pages/Course"
import Cart from "./components/pages/Cart"
import Footer from "./components/layout/Footer"

import { AuthContext } from "./supabase/auth-context"
import { CoursesContext } from "./supabase/courses-context"
import { CartContext } from "./supabase/cart-context"

import supabase from "./supabase/supabase"

function App() {
  const [currentUser, setCurrentUser] = useState({isSignedIn: false})
  const [coursesData, setCoursesData] = useState([])
  const [cartData, setCartData] = useState([])

  const getData = async () => {
    try {
      const { data, error } = await supabase.from('courses').select("*")
      if (error) {
        throw error
      }
      //console.log(data)
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
        <CartContext.Provider value={{cartData, setCartData}}>

          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:course_title" element={<Course />} />
          <Route path="/cart" element={<Cart />} />

          </Routes>
          <Footer />

        </CartContext.Provider>
      </CoursesContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
