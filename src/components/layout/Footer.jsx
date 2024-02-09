import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()

  const navCourses = () => {
    navigate("/courses")
    window.scrollTo(0, 0)
  }
  const navHome = () => {
    navigate("/")
    window.scrollTo(0, 0)
  }

  return (
    <div className="w-full flex flex-col text-milk bg-midnight-green z-30 px-[10vw] py-[10vh]">
      <div className="flex justify-between items-center pb-20">
        <a onClick={navHome} className="font-poppins cursor-pointer text-lg md:text-2xl font-bold">
          Coachivo
        </a>

        <div className="flex items-center font-light gap-1 md:gap-2">
          <a className="font-poppins text-xs md:text-sm" href="https://github.com/ivano-pinjuh">
            Created by <span className="font-semibold">Ivano Pinjuh</span>
          </a>
          <FaGithub className="text-2xl" />
        </div>
        
        <a onClick={navCourses} className="hidden cursor-pointer md:inline-block font-poppins text-lg font-semibold">
          Courses
        </a>
      </div>

      <div className="w-full h-0.5 bg-milk"></div>

      <div className="flex justify-between items-center pt-20">
        <p className="font-poppins font-light">
          © 2024 Coachivo
        </p>

        <div className="flex text-3xl gap-4">
          <FaInstagram className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
  
  export default Footer