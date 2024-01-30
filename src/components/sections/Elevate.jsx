const Elevate = () => {
  return (
    <div className="w-full flex px-[10vw] h-[55vh] bg-milk relative">

      <div className="flex flex-col w-[60%] pl-[10vw] pr-10 py-[10vh]">
        <h1 className="font-poppins font-bold text-4xl text-shadow">
          Elevate Your Game Today
        </h1>
        <p className="font-roboto-slab mt-14 text-lg">
          Ready to take your football journey to new heights?
          Sign up for our free trial and unlock a world of exclusive
          content, expert insights, and personalized guidance.
        </p>
        <button className="w-[25vw] text-lg h-10 bg-azure mt-[8vh] font-roboto-slab font-semibold rounded shadow-btn text-milk border-[1px] border-black">
          Start Free Trial
        </button>
      </div>

      <div className="h-full">
        <img className="h-full" src="/coach3.png" alt="Image of a coach" />
      </div>

    </div>
  )
}

export default Elevate