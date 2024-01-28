const Home = () => {
  return (
    <div className="w-full">
      
      {/* Hero section */}
      <div className="w-full h-[65vh] pt-[13vh] border-b-[1px] m-0 bg-isabelline relative">
      
        <div className="w-full px-[10%]">
          <h1 className="font-poppins font-bold text-4xl text-shadow">
            Become a football coach
          </h1>

          <p className="mt-[5vh] sm:max-w-[60vw] lg:max-w-[35vw]  text-lg font-roboto-slab">
            Save €100+ on your annual Coachivo Plus subscription
            for a limited time. Gain full access to our diverse
            range of football courses.
          </p>

          <button className="w-[30vw] text-lg h-12 bg-azure mt-[8vh] font-roboto-slab rounded shadow-btn text-milk border-[1px] border-black">
            Save €100 now
          </button>
        </div>

        <div className="hidden absolute h-full top-0 left-[60%] md:flex">
          <img className="" src="/hero_coach.png" alt="Image of a coach" />
        </div>

        <div className="absolute top-[calc(100%-2.5rem)] h-20 bg-midnight-green -translate-x-4 pl-8 w-[50vw] skew-x-[-18deg]">
          <div className="skew-x-[18deg] h-full flex items-center">
            <h2 className="font-poppins text-2xl w-full text-end pr-[10vw] font-semibold text-milk">
              Recognized by the world's best clubs
            </h2>
          </div>
        </div>

      </div>


      {/* Coaches section */}
      <div className="w-full bg-milk pt-[15vh] pb-[8vh]">
        <div className="flex justify-between w-[55vw] pb-[7vh] m-auto">
          <div className="w-32 border-[1px] rounded-full h-32 shadow-xl"></div>
          <div className="w-32 border-[1px] rounded-full h-32 shadow-xl"></div>
          <div className="w-32 border-[1px] rounded-full h-32 shadow-xl"></div>
          <div className="w-32 border-[1px] rounded-full h-32 shadow-xl"></div>
          
        </div>

        <p className="text-center cursor-pointer font-roboto-slab opacity-85 underline font-semibold">
          Learn from 100+ world class coaches
        </p>
      </div>






    </div>
  )   
}

export default Home