import Hero from "../sections/Hero"
import supabase from "../../supabase/supabase"

const Pricing = () => {
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
          Pricing
        </h2>

        <div className="w-full flex justify-between pt-12">
          <div className="flex w-[32%] flex-col  bg-isabelline py-8 px-8 border rounded shadow-btn">
            <h5 className="font-poppins text-2xl font-semibold">
              Coachivo Plus
            </h5>

            <div className="w-full mt-6 m-auto">
              <p className="font-poppins text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil ipsa ipsam, aliquam officia rem voluptas
                optio in error sit non asperiores natus numquam distinctio accusamus magnam nulla pariatur placeat accusantium
                quasi alias assumenda autem. Aspernatur mollitia quod, explicabo expedita sed molestiae. Dicta doloribus
                maxime libero, obcaecati nulla minus unde.
              </p>
            </div>

            <button onClick={signInHandler} className="w-[80%] text-lg m-auto mt-8 h-9 bg-azure font-roboto-slab rounded-sm text-milk border-[1px] hover:opacity-90 transition-all border-black">
              Join for €59.99
            </button>
          </div>

          <div className="flex w-[32%] flex-col  bg-isabelline py-8 px-8 border rounded shadow-btn">
            <h5 className="font-poppins text-2xl font-semibold">
              Coachivo Plus
            </h5>

            <div className="w-full mt-6 m-auto">
              <p className="font-poppins text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil ipsa ipsam, aliquam officia rem voluptas
                optio in error sit non asperiores natus numquam distinctio accusamus magnam nulla pariatur placeat accusantium
                quasi alias assumenda autem. Aspernatur mollitia quod, explicabo expedita sed molestiae. Dicta doloribus
                maxime libero, obcaecati nulla minus unde.
              </p>
            </div>

            <button onClick={signInHandler} className="w-[80%] text-lg m-auto mt-8 h-9 bg-azure font-roboto-slab rounded-sm text-milk border-[1px] hover:opacity-90 transition-all border-black">
              Join for €59.99
            </button>
          </div>

          <div className="flex w-[32%] flex-col  bg-isabelline py-8 px-8 border rounded shadow-btn">
            <h5 className="font-poppins text-2xl font-semibold">
              Coachivo Plus
            </h5>

            <div className="w-full mt-6 m-auto">
              <p className="font-poppins text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil ipsa ipsam, aliquam officia rem voluptas
                optio in error sit non asperiores natus numquam distinctio accusamus magnam nulla pariatur placeat accusantium
                quasi alias assumenda autem. Aspernatur mollitia quod, explicabo expedita sed molestiae. Dicta doloribus
                maxime libero, obcaecati nulla minus unde.
              </p>
            </div>

            <button onClick={signInHandler} className="w-[80%] text-lg m-auto mt-8 h-9 bg-azure font-roboto-slab rounded-sm text-milk border-[1px] hover:opacity-90 transition-all border-black">
              Join for €59.99
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
  
export default Pricing