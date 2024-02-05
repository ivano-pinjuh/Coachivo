import { IoIosMenu } from 'react-icons/io'
import { IoIosSearch } from "react-icons/io"
import { MdOutlineShoppingCart } from 'react-icons/md' 
import { AiOutlineClose } from "react-icons/ai"

import { useState } from 'react'

import supabase from '../../supabase/supabase'

import { useContext } from 'react'
import { AuthContext } from '../../supabase/auth-context'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext)

  const [menuShown, setMenuShown] = useState(false)

  const navigate = useNavigate()
  const homeHandler = () => {
    navigate("/")
  }



  const signInHandler = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  const signOutHandler = async () => {
    await supabase.auth.signOut()
    .then(() => {
      setCurrentUser({...currentUser, isSignedIn: false})
      window.location.reload()
    })
    .catch(error => {
      console.error(error)
    })
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      console.log('SIGNED_IN')
      setCurrentUser({...currentUser, isSignedIn: true})
    }
  }) 



  const showMenuHandler = () => {
    if (menuShown) {
      setMenuShown(false)
      document.getElementById('sidebar-menu').style.transform = "translateX(-100%)"
      document.body.classList.toggle("lock-scroll")
    }
    else {
      setMenuShown(true)
      document.getElementById('sidebar-menu').style.transform = "translateX(0)"
      document.body.classList.toggle("lock-scroll")
    }
  }

  return (
    <nav className='flex justify-between items-center w-full h-[72px] z-40 bg-milk relative shadow-nav transition-all overflow-x-clip'>

      <div id='sidebar-menu' className='fixed lg:hidden top-0 left-0 translate-x-full w-[100vw] z-50 h-[100vh] transition-all bg-black bg-opacity-75'>
        <div className='flex flex-col py-6 px-[6vw] bg-milk'>

          <div className='w-full flex justify-between items-center pb-3 border-b mb-3'>
            <img className='cursor-pointer h-[36px] -translate-y-1 -translate-x-7' src="/logo.svg" alt="Logo" />
            <AiOutlineClose onClick={showMenuHandler} className='text-3xl'/>
          </div>

          <div className='flex flex-col gap-6 py-6 pl-2'>
            <a className='text-lg font-semibold font-poppins cursor-pointer hover:border-b transition-all'>Courses</a>
            <a className='text-lg font-semibold font-poppins cursor-pointer hover:border-b transition-all'>Pricing</a>
            <a className='text-lg font-semibold font-poppins cursor-pointer hover:border-b transition-all'>Become a coach</a>
          </div>
          
          <div className='w-full flex justify-between items-center pt-5 border-t'>
            {!currentUser.isSignedIn ? (<a className='text-center rounded font-poppins p-2 border-2 w-[49%] cursor-pointer hover:opacity-80 transition-all' onClick={signInHandler}>Log in</a>) : (
              <a className='text-center rounded font-poppins p-2 border-2 w-[100%] cursor-pointer hover:opacity-80 transition-all' onClick={signOutHandler}>Log out</a>)}
            {!currentUser.isSignedIn && <a className='text-center rounded bg-azure border-2 border-azure text-milk font-poppins w-[49%] p-2 cursor-pointer hover:opacity-90 transition-all'>Register for free</a>}
          </div>
        </div>
        
      </div>

      <div className='lg:hidden'>
        <IoIosMenu onClick={showMenuHandler} className='cursor-pointer text-4xl ml-6' />
      </div>

      <img className='cursor-pointer h-[36px] -translate-y-1' src="/logo.svg" alt="Logo" onClick={homeHandler} />
      
      <a className='hidden lg:inline-block text-lg font-semibold font-poppins cursor-pointer hover:border-b transition-all'>Courses</a>

      <div className='hidden lg:flex items-center justify-between rounded h-[42px] border w-80'>
        <input id='search' className='h-10 flex-grow outline-none px-4 rounded-l font-roboto-slab text-xs' type="text" placeholder='Search for anything' />
        <div className='cursor-pointer flex justify-center border-t border-b items-center rounded-r h-[42px] w-[42px] bg-azure hover:opacity-90 transition-all'>
          <IoIosSearch className='text-milk text-2xl' />
        </div>
      </div>

      <div className='hidden lg:flex w-fit gap-8 px-6'>
        <a className='text-lg hidden xl:inline-block font-semibold font-poppins cursor-pointer hover:border-b transition-all'>Become a coach</a>
        <a className='text-lg font-semibold font-poppins cursor-pointer hover:border-b transition-all'>Pricing</a>
      </div>

      <div className='flex h-full items-center'>
        <div className='flex'>
          <IoIosSearch className='cursor-pointer lg:hidden text-3xl hover:opacity-75 transition-all' />
          <MdOutlineShoppingCart className='cursor-pointer text-3xl md:text lg:-mr-6 mx-2 hover:opacity-75 transition-all' />
        </div>

        <div className='hidden lg:flex bg-grayish h-full w-fit px-12 pl-4 skew-x-[-18deg] translate-x-10'>
          <div className='flex items-center gap-2 h-full skew-x-[18deg] mr-2'>
            {!currentUser.isSignedIn ? (<a className='text-brilliant-azure font-poppins mr-2 cursor-pointer hover:opacity-80 transition-all' onClick={signInHandler}>Log in</a>) : (
              <a className='text-brilliant-azure font-poppins mr-2 cursor-pointer hover:opacity-80 transition-all' onClick={signOutHandler}>Log out</a>
            )}
            {!currentUser.isSignedIn && <a className='rounded-[4px] bg-azure text-milk font-roboto-slab p-2 px-4 text-sm cursor-pointer hover:opacity-90 transition-all' onClick={signInHandler}>Join for Free</a>}
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar