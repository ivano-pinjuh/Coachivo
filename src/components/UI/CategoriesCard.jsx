const CategoriesCard = () => {
  return (
    <div className="flex border w-full h-[14vh] lg:w-[31%] lg:h-[12vh] bg-milk rounded shadow-btn">
      {/*<img className="aspect-square h-full bg-azure" src="" alt="an image" />*/}
      <div className="aspect-square h-full bg-azure"></div>

      <div className="flex px-5 py-3 justify-between flex-col">
        <h5 className="font-roboto-slab font-semibold text-xl">
          Fundamentals
        </h5>
        <p className="font-roboto-slab font-medium opacity-75">
          17 courses
        </p>
      </div>
    </div>
  )
}

export default CategoriesCard