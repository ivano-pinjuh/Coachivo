import { GoClock } from "react-icons/go"


const CourseCard = () => {
  return (
    <div className="flex flex-col rounded-lg h-[400px] shadow-nav bg-milk w-[23%] overflow-clip">
      {/*<img src="" alt="" />*/}
      <div className="w-full bg-brilliant-azure aspect-video"></div>
      
      <div className="flex flex-col flex-grow w-full py-3 pb-4 px-4">
        <div className="flex">
          <p className="w-fit px-4 py-1 text-milk font-poppins rounded-sm bg-brilliant-azure">
            Defense
          </p>
        </div>
        

        <h5 className="font-poppins mt-3 text-lg font-semibold">
          Passive Approach in Defensive Situations
        </h5>
        <p className="font-roboto-slab mt-2 text-sm opacity-65">
          Mario Ivanković
        </p>

        <div className="flex h-full items-end justify-between">

          <div className="flex items-center gap-1">
            <GoClock className="text-xl" />
            <p className="font-roboto-slab">
              3-6 hrs
            </p>
          </div>
          <p className="font-semibold font-roboto-slab">
            €14.99
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard