import { IoIosMenu } from 'react-icons/io'
import { useState } from 'react'

const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false)

  const showMenuHandler = () => {
    if (menuShown) {
      setMenuShown(false)
      document.getElementById('sidebar-menu').style.transform = "translateX(100%)"
    }
    else {
      setMenuShown(true)
      document.getElementById('sidebar-menu').style.transform = "translateX(0)"
    }
  }

  return (
    <div className='flex z-40 bg-white items-center justify-between relative h-[60px] w-full shadow-md pl-[20px] pr-[20px] overflow-x-clip border-b-2 border-black'>
      <div className='flex items-center h-[100%]'>  
        <img className='h-[80%]' src="/coachivo.png" alt="" />
        <a className='font-bold text-[16px]' href="">Coachivo</a>
      </div>
      <IoIosMenu onClick={showMenuHandler} className='lg:hidden text-3xl' />


      <div id='sidebar-menu' className='flex h-40 w-full border-black bg-pink-300 md:hidden translate-x-[100%] z-50 absolute top-0 right-0 transition-all'>
        <h3 onClick={showMenuHandler}>close</h3>
      </div>
    </div>
  )
}

export default Navbar