import { GoClock } from "react-icons/go"


const CourseCard = (props) => {
  
  let title = ""
  let author = ""
  let price = ""
  let time_to_complete = ""
  let area_of_field = ""

  if (props.course != undefined) {
    title = props.course.title
    author = props.course.author
    price = props.course.price
    time_to_complete = props.course.time_to_complete
    area_of_field = props.course.area_of_field
  }

  
  return (
    <div className="flex flex-col cursor-pointer hover:scale-[1.01] rounded-lg h-[380px] md:h-[400px] shadow-nav bg-milk w-[49%] md:w-[23%] transition-all overflow-clip">
      {/*<img src="" alt="" />*/}
      <div className="w-full bg-brilliant-azure aspect-video"></div>
      
      <div className="flex flex-col flex-grow w-full py-3 pb-4 px-4">
        <div className="flex">
          <p className="w-fit px-4 py-1 text-milk font-poppins rounded-sm bg-brilliant-azure">
            {area_of_field}
          </p>
        </div>
        

        <h5 className="font-poppins mt-3 text-base md:text-lg font-semibold">
          {title}
        </h5>
        <p className="font-roboto-slab mt-2 text-xs opacity-65">
          {author}
        </p>

        <div className="flex h-full items-end justify-between">

          <div className="flex items-center gap-1">
            <GoClock className="text-sm md:text-xl" />
            <p className="font-roboto-slab text-sm md:text-base">
              {time_to_complete}
            </p>
          </div>
          <p className="font-semibold text-sm md:text-base font-roboto-slab">
            €{price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard