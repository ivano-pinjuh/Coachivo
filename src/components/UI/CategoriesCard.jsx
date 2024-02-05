const CategoriesCard = (props) => {
  let category = ""
  let no_of_courses = ""

  if (props.category != undefined) {
    category = props.category
    no_of_courses = props.no_of_courses
  }

  return (
    <div className="flex border w-full lg:w-[31%] lg:h-[12vh] cursor-pointer transition-all hover:scale-[1.01] bg-milk rounded shadow-btn">
      {/*<img className="aspect-square h-full bg-azure" src="" alt="an image" />*/}
      <div className="aspect-square h-full bg-azure"></div>

      <div className="flex px-5 py-3 justify-between flex-col">
        <h5 className="font-roboto-slab font-semibold text-xl">
          {category}
        </h5>
        <p className="font-roboto-slab font-medium opacity-75">
          {no_of_courses} courses
        </p>
      </div>
    </div>
  )
}

export default CategoriesCard