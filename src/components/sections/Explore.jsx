import { useContext } from "react"
import CategoriesCard from "../UI/CategoriesCard"
import { CoursesContext } from "../../supabase/courses-context"

const Explore = () => {
  const { coursesData, setCoursesData } = useContext(CoursesContext)

  const getTotalCoursesPerCategory = () => {
    const categories = [
      'Fundamentals',
      'Defensive Strategies',
      'Midfield Excellence',
      'Attacking Mastery',
      'Set Pieces',
      'Pressing Strategies',
      'Physical Conditioning',
      'Youth Development',
      'Tactical Analysis'
    ]

    const counts = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]

    coursesData.forEach(course => {
      course.category.forEach(categ => {
        if (categories.includes(categ)){
          counts[categories.indexOf(categ)]++
        }
      })
    })

    return counts
  }

  const counts = getTotalCoursesPerCategory()


  return (
    <div className="w-full px-[10vw] pt-[8vh] pb-[14vh] bg-myrtle-green relative overflow-x-clip">
      <h1 className="font-poppins font-bold text-4xl text-milk text-shadow">
        Explore Coachivo
      </h1>

      <div className="w-full flex justify-between gap-4 flex-wrap mt-12">

        <CategoriesCard category={"Fundamentals"} no_of_courses={counts[0]} />
        <CategoriesCard category={"Defensive Strategies"} no_of_courses={counts[1]} />
        <CategoriesCard category={"Midfield Excellence"} no_of_courses={counts[2]} />
        <CategoriesCard category={"Attacking Mastery"} no_of_courses={counts[3]} />
        <CategoriesCard category={"Set Pieces"} no_of_courses={counts[4]} />
        <CategoriesCard category={"Pressing Strategies"} no_of_courses={counts[5]} />
        <CategoriesCard category={"Physical Conditioning"} no_of_courses={counts[6]} />
        <CategoriesCard category={"Youth Development"} no_of_courses={counts[7]} />
        <CategoriesCard category={"Tactical Analysis"} no_of_courses={counts[8]} />
        
      </div>

      <div className="absolute right-0 top-[calc(100%-2.5rem)] z-10 h-20 bg-midnight-green translate-x-4 pl-8 w-[120vw] md:w-[55vw] skew-x-[18deg]">
        <div className="skew-x-[-18deg] h-full flex items-center">
          <h2 className="font-poppins text-base lg:text-2xl w-full text-center md:text-start md:pl-[2vw] font-semibold text-milk">
            From the Coachivo community
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Explore