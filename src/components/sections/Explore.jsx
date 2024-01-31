import CategoriesCard from "../UI/CategoriesCard"

const Explore = () => {
  return (
    <div className="w-full px-[10vw] pt-[8vh] pb-[14vh] bg-myrtle-green relative overflow-x-clip">
      <h1 className="font-poppins font-bold text-4xl text-milk text-shadow">
        Explore Coachivo
      </h1>

      <div className="w-full flex justify-between gap-4 flex-wrap mt-12">

        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        
      </div>

      <div className="absolute right-0 top-[calc(100%-2.5rem)] z-10 h-20 bg-midnight-green translate-x-4 pl-8 w-[120vw] md:w-[55vw] skew-x-[18deg]">
        <div className="skew-x-[-18deg] h-full flex items-center">
          <h2 className="font-poppins text-base lg:text-2xl w-full text-center md:text-start md:pl-[2vw] font-semibold text-milk">
            From the Coachivo community
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Explore