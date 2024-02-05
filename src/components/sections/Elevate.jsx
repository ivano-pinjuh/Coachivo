import supabase from "../../supabase/supabase"

const Elevate = () => {
  const signInHandler = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }
  
  return (
    <div className="w-full flex-col md:flex-row flex px-[10vw] md:h-[60vh] bg-milk relative">

      <div className="flex flex-col w-full md:w-[60%] px-[10vw] md:pl-[10vw] md:pr-10 py-[10vh]">
        <h1 className="font-poppins font-bold text-4xl text-shadow">
          Elevate Your Game Today
        </h1>
        <p className="font-roboto-slab mt-14 text-lg">
          Ready to take your football journey to new heights?
          Sign up for our free trial and unlock a world of exclusive
          content, expert insights, and personalized guidance.
        </p>
        <button className="w-full md:w-[40%] lg:w-[25vw] text-lg h-10 bg-azure mt-[8vh] font-roboto-slab font-semibold rounded shadow-btn text-milk border-[1px] hover:opacity-90 transition-all border-black" onClick={signInHandler}>
          Start Free Trial
        </button>
      </div>

      <div className="hidden md:block h-full">
        <img className="h-full" src="/coach3.png" alt="Image of a coach" />
      </div>

      <div className="md:hidden w-full">
        <img className="w-full" src="/coach3_mobile.png" alt="Image of a coach" />
      </div>

    </div>
  )
}

export default Elevate