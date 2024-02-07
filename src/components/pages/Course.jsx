import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CoursesContext } from "../../supabase/courses-context"
import { CartContext } from "../../supabase/cart-context"

const Course = () => {
  const { coursesData, setCoursesData } = useContext(CoursesContext)
  const { cartData, setCartData } = useContext(CartContext)

  const {course_title} = useParams()
  

  let course = {}
  coursesData.forEach(cours => {
    if (cours.title.toLowerCase() == course_title.replace(/-/g, " ")){
      course = cours
    }
  })

  const addToCartHandler = () => {
    let temp_data = []
    let is_there = false

    cartData.forEach(item => {
      if (item.title === course.title){
        let value = item
        value.amount = value.amount + 1

        temp_data.push(value)
        is_there = true
      }
      else {
        temp_data.push(item)
      }
    })

    if (is_there) {
      setCartData(temp_data)
      return
    }

    setCartData([...temp_data, {title: course.title, price: course.price, amount: 1}])
  }




  return (
    <div className="w-full min-h-fit pb-[14vh] pt-[10vh] md:pb-[13vh] md:pt-[12vh] overflow-x-clip border-b-[1px] m-0 bg-isabelline relative mb-[80vh]">
      <div className="w-full px-[10%]">
        <h3 className="font-poppins font-bold sm:max-w-[60vw] md:max-w-[45vw] lg:max-w-[35vw] text-4xl text-shadow">
          {course.title}
        </h3>

        <p className="sm:max-w-[60vw] md:max-w-[45vw] lg:max-w-[35vw] font-roboto-slab">
          {course.author}
        </p>

        <p className="mt-[4vh] text-lg sm:max-w-[60vw] md:max-w-[45vw] lg:max-w-[35vw] font-roboto-slab">
          {course.description}
        </p>
      </div>

      <button onClick={addToCartHandler}>Add to Cart</button>

      <div className="absolute top-[calc(100%-2.5rem)] left-[calc(50%-60vw)] md:left-0 h-20 bg-midnight-green md:-translate-x-4 md:pl-8 w-[120vw] md:w-[75vw] skew-x-[-14deg]">
        <div className="skew-x-[14deg] h-full flex items-center">

          <div>
            <p className="font-poppins text-sm lg:text-2xl pl-[9vw] md:pr-[5vw] font-semibold text-milk">
              {course.time_to_complete}
            </p>
          </div>

          <div>
            <p className="font-poppins text-sm lg:text-lg md:pr-[5vw] font-semibold text-milk">
              {course.category}
            </p>
          </div>

          <div>
            <p className="font-poppins text-sm lg:text-2xl pl-[9vw] md:pr-[5vw] font-semibold text-milk">
              €{course.price}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Course