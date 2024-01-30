import CommentCard from "../UI/CommentCard"

const Comments = () => {
  return (
    <div className="w-full overflow-x-clip bg-isabelline h-96 relative">

      <div className="absolute right-0 top-[-2.5rem] h-20 bg-midnight-green translate-x-4 pl-8 w-[55vw] skew-x-[18deg]">
        <div className="skew-x-[-18deg] h-full flex items-center">
          <h2 className="font-poppins text-2xl w-full text-start pl-[2vw] font-semibold text-milk">
            From the Coachivo community
          </h2>
        </div>
      </div>

      <div className="flex px-[10vw] pt-[18vh]">
        <CommentCard />
      </div>

    </div>
  )
}

export default Comments