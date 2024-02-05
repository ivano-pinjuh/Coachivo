import { useContext, useRef, useState } from "react"
import CourseCard from "../UI/CourseCard"
import { CoursesContext } from "../../supabase/courses-context"

const NewCourses = () => {
  const { coursesData, setCoursesData } = useContext(CoursesContext)

  const [currentArea, setCurrentArea] = useState("Defense")

  const tabRef = useRef()

  const changeTabHandler = (event) => {
    tabRef.current.classList.add("opacity-50")
    tabRef.current.classList.remove("font-semibold")

    setCurrentArea(event.target.dataset.area)
    event.target.classList.remove("opacity-50")
    event.target.classList.add("font-semibold")
    tabRef.current = event.target
  }

  return (
    <div className="w-full bg-isabelline pb-[10vh] pt-[10vh] md:pt-[12vh] px-[10vw]">
      <h1 className="font-poppins font-bold text-4xl text-shadow">
        New on Coachivo
      </h1>

      <div className="">
        <div className="hidden md:flex w-full mt-[5vh]">
          <h3 data-area='Defense' ref={tabRef} className="font-roboto-slab text-lg px-10 py-2 border-b-2 cursor-pointer font-semibold hover:bg-opacity-20 hover:bg-azure transition-all" onClick={changeTabHandler}>
            Build-up Play
          </h3>

          <h3 data-area='Midfield' className="font-roboto-slab text-lg px-10 py-2 border-b-2 opacity-50 cursor-pointer hover:bg-opacity-20 hover:bg-azure transition-all" onClick={changeTabHandler}>
            Midfield Excellence
          </h3>

          <h3 data-area='Attack' className="font-roboto-slab text-lg px-10 py-2 border-b-2 opacity-50 cursor-pointer hover:bg-opacity-20 hover:bg-azure transition-all" onClick={changeTabHandler}>
            Attacking Prowess
          </h3>
            
          <div className="border-b-2 opacity-50 flex-grow"></div>
        </div>

        <div className="flex mt-10 w-full flex-wrap gap-y-4 justify-between">
          {coursesData.filter(course => course.area_of_field == currentArea).slice(0, 4).map(course => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="w-[60%] md:w-[40%] lg:w-[20vw] text-lg h-10 bg-azure mt-[8vh] font-roboto-slab rounded shadow-btn text-milk border-[1px] hover:opacity-90 transition-all border-black">
          Explore more
        </button>
      </div>
    </div>
  )
}

export default NewCourses