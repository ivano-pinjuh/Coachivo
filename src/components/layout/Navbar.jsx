import { IoIosMenu } from 'react-icons/io'
import { IoIosSearch } from "react-icons/io"
import { MdOutlineShoppingCart } from 'react-icons/md' 

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
    <div className='flex justify-between items-center w-full h-[72px] shadow-md overflow-clip'>
      <img className='h-[48px] -translate-y-2' src="/logo.svg" alt="Logo" />
      
      <a className='text-lg font-semibold font-poppins px-8 pr-12' href="">Courses</a>

      <div className='flex items-center justify-between rounded h-[42px] border-black border-[0.5px] w-80'>
        <input className='h-10 px-4 rounded-l font-roboto-slab text-xs' type="search" placeholder='Search for anything' />
        <div className='flex justify-center items-center rounded-r h-[42px] w-[42px] bg-azure'>
          <IoIosSearch className='text-milk text-2xl' />
        </div>
      </div>

      <div className='flex w-fit gap-8 px-6'>
        <a className='text-lg font-semibold font-poppins' href="">Become a coach</a>
        <a className='text-lg font-semibold font-poppins' href="">Pricing</a>
      </div>

      <MdOutlineShoppingCart className='text-4xl mx-6' />

      <div className='bg-grayish h-full w-fit px-12 skew-x-[-18deg] translate-x-10'>
        <div className='flex items-center gap-6 h-full skew-x-[18deg] mr-8'>
          <a className='text-brilliant-azure font-roboto-slab' href="">Log in</a>
          <a className='rounded-[4px] bg-azure text-milk font-roboto-slab p-2 px-5 text-sm' href="">Join for Free</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar