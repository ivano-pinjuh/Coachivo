import { ImQuotesRight } from "react-icons/im"


const CommentCard = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-milk shadow-btn rounded p-4 w-[80vw] md:w-[60vw]">
      <div className="h-full hidden md:flex justify-center items-start w-[10%]">
        <ImQuotesRight className="text-3xl" />
      </div>

      <div className="flex flex-col w-full md:w-[55%] py-[6vh]">
        <h6 className=" font-poppins font-semibold text-2xl">
          Game-Changing Platform!
        </h6>

        <p className="font-roboto-slab w-full md:w-[80%] mt-[2vh]">
          Coachivo took my soccer skills to the next level. The courses
          are expertly crafted, covering basics to advanced strategies,
          making it my top choice for soccer excellence.
        </p>
      </div>

      <div className="h-0.5 bg-black md:hidden"></div>

      <div className="flex flex-col gap-5 items-center justify-center pb-6 w-full md:w-[35%]">
        <div className="rounded-full bg-azure h-[14vh] aspect-square shadow-btn">
        </div>

        <p className="font-poppins">
          Michael Boris
        </p>
      </div>

    </div>
  )
}

export default CommentCard