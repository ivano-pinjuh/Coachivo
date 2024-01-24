const Home = () => {
  return (
    <div className="w-full">
      <div className="flex z-50 relative flex-col bg-gradient h-[100vh] min-h-fit p-10 md:h-[90vh] -translate-y-2 transition-all">
        <h1 className="font-bold text-2xl mt-6">
          The best platform for football coaching courses
        </h1>
        <p className="text-sm font-semibold mt-8">
          Explore our diverse collection of football coaching courses at Coachivo.
          Elevate your skills with our expertly designed programs, tailored for all levels of play.
        </p>
        <p className="text-sm font-semibold mt-8">
          - Explore our diverse collection of football coaching courses at Coachivo.
        </p>
        <p className="text-sm font-semibold mt-2">
          - Elevate your skills with our expertly designed programs, tailored for all levels of play.
        </p>
        {/*<p className="text-xs mt-20">
          Gain access to all courses for €30/month
        </p>
        <button className="font-semibold text-md w-[80%] sm:w-[69svw] h-9 bg-green-400 border-[1.5px] border-black rounded-md">
          Start Free Trial
        </button>
        <p className="text-sm font-bold">
          Join us and kickstart your path to greatness
        </p>*/}
      </div>

      <div className="flex flex-col bg-gradient2 h-[100vh] min-h-fit pt-60 p-10 md:h-[90vh] -translate-y-60 transition-all">
        partners
      </div>
    </div>
  )   
}

export default Home