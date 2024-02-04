import { useContext } from "react"
import CourseCard from "../UI/CourseCard"
import { CoursesContext } from "../../supabase/courses-context"

const NewCourses = () => {
  const { coursesData, setCoursesData } = useContext(CoursesContext)

  return (
    <div className="w-full bg-isabelline pb-[10vh] pt-[10vh] md:pt-[12vh] px-[10vw]">
      <h1 className="font-poppins font-bold text-4xl text-shadow">
        New on Coachivo
      </h1>

      <div className="">
        <div className="hidden md:flex w-full mt-[6vh]">
          <h3 className="font-roboto-slab text-lg px-10 pb-2 border-b-2 cursor-pointer font-semibold">
            Build-up Play
          </h3>

          <h3 className="font-roboto-slab text-lg px-10 pb-2 border-b-2 opacity-50 cursor-pointer font-semibold">
            Midfield Excellence
          </h3>

          <h3 className="font-roboto-slab text-lg px-10 pb-2 border-b-2 opacity-50 cursor-pointer font-semibold">
            Attacking Prowess
          </h3>
            
          <div className="border-b-2 opacity-50 flex-grow"></div>
        </div>

        <div className="flex mt-10 w-full flex-wrap gap-y-4 justify-between">
          <CourseCard course={coursesData[0]} />
          <CourseCard course={coursesData[0]} />
          <CourseCard course={coursesData[0]} />
          <CourseCard course={coursesData[0]} />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="w-[60%] md:w-[40%] lg:w-[20vw] text-lg h-10 bg-azure mt-[8vh] font-roboto-slab rounded shadow-btn text-milk border-[1px] border-black">
          Explore more
        </button>
      </div>
    </div>
  )
}

export default NewCourses