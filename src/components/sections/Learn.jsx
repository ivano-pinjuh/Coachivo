const Learn = () => {
  return (
    <div className="flex w-full bg-midnight-green">
      <div className="w-[45%] relative">
        <img className="h-full absolute top-0 left-[7%]" src="/learn_coach.png" alt="" />
      </div>

      <div className="flex w-[55%] pb-[10vh] pr-[14vw] mt-[8vh] flex-col text-milk">
        <h1 className="font-poppins text-center text-4xl mb-12 font-bold text-shadow">
          Learn and Grow
        </h1>

        <div className="">
          <h3 className="font-poppins text-xl mb-4 font-semibold">
            Experience
          </h3>
          <p className="font-roboto-slab ml-8 text-base">
            Immerse yourself in a dynamic learning experience with Coachivo.
            From foundational techniques to advanced strategies, our courses
            provide a comprehensive understanding of the beautiful game.
          </p>
        </div>

        <div className="">
          <h3 className="font-poppins text-xl mb-4 mt-12 font-semibold">
            Practice
          </h3>
          <p className="font-roboto-slab ml-8 text-base">
            Hone your skills through dedicated practice sessions.
            Our hands-on approach ensures that you not only grasp theoretical
            knowledge but also develop the muscle memory and proficiency
            required on the soccer field.
          </p>
        </div>

        <div className="">
          <h3 className="font-poppins text-xl mb-4 mt-12 font-semibold">
            Apply
          </h3>
          <p className="font-roboto-slab ml-8 text-base">
            Take what you've learned and apply it to real-game scenarios. Coachivo empowers you to seamlessly integrate new skills and strategies into your playing style, allowing you to excel in every match. Join us on this transformative journey to learn, practice, and apply, and witness your soccer prowess reach new heights.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Learn