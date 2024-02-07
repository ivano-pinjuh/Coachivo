import { useContext, useRef, useState } from "react"
import { CoursesContext } from "../../supabase/courses-context"
import CourseCard from "../UI/CourseCard"

const Courses = () => { 
  const { coursesData, setCoursesData } = useContext(CoursesContext)
  const [filteredCourses, setFilteredCourses] = useState([])
  const [price, setPrice] = useState([0, 999])

  const areaRef = useRef(undefined)
  const categoryRef = useRef(undefined)
  const authorRef = useRef(undefined)

  if (coursesData.length > 0 && filteredCourses.length === 0) {
    setFilteredCourses([...coursesData]);
  }

  const filterCourses = () => {
    let current = [...coursesData]

    if (areaRef.current){
      current = current.filter(course => course.area_of_field == areaRef.current.area)
    }
    if (categoryRef.current){
      current = current.filter(course => course.category.includes(categoryRef.current.category))
    }
    if (authorRef.current){
      current = current.filter(course => course.author === authorRef.current)
    }
    if (price){
      current = current.filter(course => (course.price >= price[0] && course.price <= price[1]))
    }
    

    setFilteredCourses([...current])

  }

  const areaHandler = (event) => {
    if (areaRef.current) {

      if (areaRef.current.button == event.target){
        areaRef.current.button.classList.remove("bg-azure")
        areaRef.current.button.classList.remove("bg-opacity-60")
  
        areaRef.current = undefined
        filterCourses()
        return
      }

      areaRef.current.button.classList.remove("bg-azure")
      areaRef.current.button.classList.remove("bg-opacity-60")

      areaRef.current = {button: event.target,
        area: event.target.dataset.area}

      areaRef.current.button.classList.add("bg-azure")
      areaRef.current.button.classList.add("bg-opacity-60")

      filterCourses()
      return
    }

    areaRef.current = {button: event.target,
      area: event.target.dataset.area}

    areaRef.current.button.classList.add("bg-azure")
    areaRef.current.button.classList.add("bg-opacity-60")
    
    filterCourses()
  }


  const categoryHandler = (event) => {
    if (categoryRef.current) {

      if (categoryRef.current.button == event.target){
        categoryRef.current.button.classList.remove("bg-azure")
        categoryRef.current.button.classList.remove("bg-opacity-60")
  
        categoryRef.current = undefined
        filterCourses()
        return
      }

      categoryRef.current.button.classList.remove("bg-azure")
      categoryRef.current.button.classList.remove("bg-opacity-60")

      categoryRef.current = {button: event.target,
        category: event.target.dataset.category}

      categoryRef.current.button.classList.add("bg-azure")
      categoryRef.current.button.classList.add("bg-opacity-60")

      filterCourses()
      return
    }

    categoryRef.current = {button: event.target,
      category: event.target.dataset.category}

    categoryRef.current.button.classList.add("bg-azure")
    categoryRef.current.button.classList.add("bg-opacity-60")
    
    filterCourses()
  }



  return (
    <div className="w-full flex gap-10 pb-[14vh] pt-[10vh] px-[4vw] md:pb-[13vh] md:pt-[8vh] overflow-x-clip border-b m-0 bg-isabelline relative">
      <div className="flex flex-col w-[20%] mt-[4vh] h-fit sticky top-[3vh]">
        <h6 className="font-roboto-slab font-bold mb-[3vh] text-2xl">
          Filters
        </h6>

        <div className="w-full">
          <p className="font-poppins font-semibold pb-2 text-lg px-2">
            Area of Field
          </p>

          <div className="flex w-full gap-2 flex-wrap border-b px-2 pb-4">
            <button onClick={areaHandler} data-area="Defense" className='text-center rounded-sm font-poppins py-1 px-6 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Defense
            </button>
            <button onClick={areaHandler} data-area="Midfield" className='text-center rounded-sm font-poppins py-1 px-6 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Midfield
            </button>
            <button onClick={areaHandler} data-area="Attack" className='text-center rounded-sm font-poppins py-1 px-6 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Attack
            </button>
          </div>
        </div>

        <div className="w-full">
          <p className="font-poppins font-semibold mt-6 pb-2 text-lg px-2">
            Categories
          </p>

          <div className="flex w-full gap-2 flex-wrap border-b px-2 pb-4">
            <button onClick={categoryHandler} data-category="Fundamentals" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Fundamentals
            </button>
            <button onClick={categoryHandler} data-category="Defensive Strategies" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Defensive Strategies
            </button>
            <button onClick={categoryHandler} data-category="Midfield Excellence" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Midfield Excellence
            </button>
            <button onClick={categoryHandler} data-category="Attacking Mastery" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Attacking Mastery
            </button>
            <button onClick={categoryHandler} data-category="Set Pieces" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Set Pieces
            </button>
            <button onClick={categoryHandler} data-category="Pressing Strategies" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Pressing Strategies
            </button>
            <button onClick={categoryHandler} data-category="Physical Conditioning" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Physical Conditioning
            </button>
            <button onClick={categoryHandler} data-category="Youth Development" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Youth Development
            </button>
            <button onClick={categoryHandler} data-category="Tactical Analysis" className='text-center rounded-sm font-poppins py-1 px-3 border-2 cursor-pointer hover:opacity-80 transition-all'>
              Tactical Analysis
            </button>
            
          </div>
        </div>


        
        

      </div>

      <div className="w-[72%]">
        <h3 className="font-poppins font-bold mb-[5vh] text-4xl text-shadow">
          All Courses
        </h3>
        <div className="flex w-full gap-4 gap-y-10 flex-wrap">
          {filteredCourses.map(course => (<CourseCard course={course} key={course.id} />))}
        </div>
      </div>
        
    </div>
  )
}
  
export default Courses