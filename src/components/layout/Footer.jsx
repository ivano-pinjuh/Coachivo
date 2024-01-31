import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full flex flex-col text-milk bg-midnight-green z-30 px-[10vw] py-[10vh]">
      <div className="flex justify-between items-center pb-20">
        <a className="font-poppins text-lg md:text-2xl font-bold" href="">
          Coachivo
        </a>

        <div className="flex items-center font-light gap-1 md:gap-2">
          <a className="font-poppins text-xs md:text-sm" href="">
            Created by <span className="font-semibold">Ivano Pinjuh</span>
          </a>
          <FaGithub className="text-2xl" />
        </div>
        
        <a className="hidden md:inline-block font-poppins text-lg font-semibold" href="">
          Courses
        </a>
      </div>

      <div className="w-full h-0.5 bg-milk"></div>

      <div className="flex justify-between items-center pt-20">
        <p className="font-poppins cursor-pointer font-light">
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