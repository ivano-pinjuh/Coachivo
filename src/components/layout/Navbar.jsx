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
    <div className='flex justify-between items-center w-full h-[72px] z-50 bg-milk relative shadow-nav overflow-x-clip'>
      <div className='lg:hidden'>
        <IoIosMenu className='cursor-pointer text-4xl ml-6' />
      </div>

      <img className='cursor-pointer h-[36px] -translate-y-1' src="/logo.svg" alt="Logo" />
      
      <a className='hidden lg:inline-block text-lg font-semibold font-poppins' href="">Courses</a>

      <div className='hidden lg:flex items-center justify-between rounded h-[42px] border-black border-[0.5px] w-80'>
        <input id='search' name='search' className='h-10 px-4 rounded-l font-roboto-slab text-xs' type="search" placeholder='Search for anything' />
        <div className='flex justify-center items-center rounded-r h-[42px] w-[42px] bg-azure'>
          <IoIosSearch className='cursor-pointer text-milk text-2xl' />
        </div>
      </div>

      <div className='hidden lg:flex w-fit gap-8 px-6'>
        <a className='text-lg hidden xl:inline-block font-semibold font-poppins' href="">Become a coach</a>
        <a className='text-lg font-semibold font-poppins' href="">Pricing</a>
      </div>

      <div className='flex h-full items-center'>
        <div className='flex'>
          <IoIosSearch className='cursor-pointer lg:hidden text-3xl' />
          <MdOutlineShoppingCart className='cursor-pointer text-3xl md:text lg:-mr-6 mx-2' />
        </div>

        <div className='hidden lg:flex bg-grayish h-full w-fit px-12 pl-4 skew-x-[-18deg] translate-x-10'>
          <div className='flex items-center gap-2 h-full skew-x-[18deg] mr-2'>
            <a className='text-brilliant-azure font-roboto-slab mr-2' href="">Log in</a>
            <a className='rounded-[4px] bg-azure text-milk font-roboto-slab p-2 px-4 text-sm' href="">Join for Free</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar