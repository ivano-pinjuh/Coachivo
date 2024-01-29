import Hero from "../sections/Hero"
import OurCoaches from "../sections/OurCoaches"
import NewCourses from "../sections/NewCourses"
import Learn from "../sections/Learn"


const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <OurCoaches />
      <NewCourses />
      <Learn />
    </div>
  )   
}

export default Home