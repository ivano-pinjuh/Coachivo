import CategoriesCard from "../UI/CategoriesCard"

const Explore = () => {
  return (
    <div className="w-full px-[10vw] pt-[8vh] pb-[14vh] bg-myrtle-green">
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
    </div>
  )
}

export default Explore