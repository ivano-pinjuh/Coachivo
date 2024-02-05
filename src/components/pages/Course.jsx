import { useParams } from "react-router-dom"

const Course = () => {
  const {course_title} = useParams()
  course_title.replace("-", / /g).toUpperCase()
  console.log(course_title)
  

  return (
    <div>

    </div>
  )
}

export default Course