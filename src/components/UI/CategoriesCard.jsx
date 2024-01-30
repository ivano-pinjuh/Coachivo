const CategoriesCard = () => {
  return (
    <div className="flex border w-[29%] h-[12vh] bg-milk rounded">
      <img className="aspect-square h-full bg-azure" src="" alt="an image" />

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