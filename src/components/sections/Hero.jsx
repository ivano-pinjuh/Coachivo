import supabase from "../../supabase/supabase"

const Hero = () => {
  const signInHandler = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <div className="w-full min-h-fit pb-[14vh] pt-[10vh] md:pb-[13vh] md:pt-[8vh] overflow-x-clip border-b-[1px] m-0 bg-isabelline relative">
      <div className="w-full px-[10%]">
        <h1 className="font-poppins font-bold sm:max-w-[60vw] md:max-w-[45vw] lg:max-w-[35vw] text-4xl text-shadow">
          Become a football coach
        </h1>

        <p className="mt-[5vh] text-lg sm:max-w-[60vw] md:max-w-[45vw] lg:max-w-[35vw] font-roboto-slab">
          Save €100+ on your annual Coachivo Plus subscription
          for a limited time. Gain full access to our diverse
          range of football courses.
        </p>

        <button onClick={signInHandler} className="w-full md:w-[35vw] lg:w-[25vw] text-lg h-11 bg-azure mt-[8vh] font-roboto-slab font-semibold rounded shadow-btn text-milk border-[1px] hover:opacity-90 transition-all border-black">
          Start now
        </button>
      </div>

      <div className="hidden absolute h-full top-0 md:left-[50%] lg:left-[60%] md:flex">
        <img className="" src="/hero_coach.png" alt="Image of a coach" />
      </div>

      <div className="absolute top-[calc(100%-2.5rem)] left-[calc(50%-60vw)] md:left-0 h-20 bg-midnight-green md:-translate-x-4 md:pl-8 w-[120vw] md:w-[55vw] skew-x-[-18deg]">
        <div className="skew-x-[18deg] h-full flex items-center">
          <h2 className="font-poppins text-sm lg:text-2xl w-full text-center lg:text-end md:pr-[10vw] font-semibold text-milk">
            Recognized by the world's best clubs
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero