import supabase from "../../supabase/supabase"
import Hero from "../sections/Hero"

const BecomeCoach = () => {
  const signInHandler = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <div>
      <Hero />

      <div className="flex flex-col py-32 px-[10vw]">

        <h2 className="font-poppins font-bold text-4xl text-shadow">
          Become a coach at Coachivo
        </h2>

        <div className="w-full flex justify-between pt-12">
          <div className="flex w-full flex-col bg-isabelline py-8 px-8 border rounded shadow-btn">
            <h5 className="font-poppins text-2xl font-semibold">
              Teach other aspiring coaches
            </h5>

            <div className="w-full mt-6 m-auto">
              <p className="font-poppins text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil ipsa ipsam, aliquam officia rem voluptas
                optio in error sit non asperiores natus numquam distinctio accusamus magnam nulla pariatur placeat accusantium
                quasi alias assumenda autem. Aspernatur mollitia quod, explicabo expedita sed molestiae. Dicta doloribus
                maxime libero, obcaecati nulla minus unde.
              </p>

              <p className="font-poppins text-sm mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil ipsa ipsam, aliquam officia rem voluptas
                optio in error sit non asperiores natus numquam distinctio accusamus magnam nulla pariatur placeat accusantium
                quasi alias assumenda autem. Aspernatur mollitia quod, explicabo expedita sed molestiae. Dicta doloribus
                maxime libero, obcaecati nulla minus unde.
              </p>

              <p className="font-poppins text-sm mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil ipsa ipsam, aliquam officia rem voluptas
                optio in error sit non asperiores natus numquam distinctio accusamus magnam nulla pariatur placeat accusantium
                quasi alias assumenda autem. Aspernatur mollitia quod, explicabo expedita sed molestiae. Dicta doloribus
                maxime libero, obcaecati nulla minus unde.
              </p>
            </div>

            <button onClick={signInHandler} className="w-[40%] text-lg m-auto mt-8 h-9 bg-azure font-roboto-slab rounded-sm text-milk border-[1px] hover:opacity-90 transition-all border-black">
              Become a coach
            </button>
          </div>



        </div>
        
      </div>
    </div>
  )
}

export default BecomeCoach