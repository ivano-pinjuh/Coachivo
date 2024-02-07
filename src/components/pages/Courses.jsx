import { useContext } from "react"
import { CoursesContext } from "../../supabase/courses-context"
import CourseCard from "../UI/CourseCard"

const Courses = () => { 
  const { coursesData, setCoursesData } = useContext(CoursesContext)

    return (
      <div className="w-full flex gap-10 pb-[14vh] pt-[10vh] px-[4vw] md:pb-[13vh] md:pt-[8vh] overflow-x-clip border-b m-0 bg-isabelline relative">
        <div className="w-[20%] h-96 border">
          filters
          <p>area of field</p>
          <p>category</p>
          <p>coach/author</p>
          <p>time to complete</p>
          <p>price</p>

        </div>

        <div className="w-[72%]">
          <h3 className="font-poppins font-bold mb-[5vh] text-4xl text-shadow">
            All Courses
          </h3>
          <div className="w-full flex justify-between gap-y-10 flex-wrap">
            {coursesData.map(course => (<CourseCard course={course} key={course.id} />))}
          </div>
        </div>
        
      </div>
    )
  }
  
export default Courses