import { useContext } from "react"
import { CartContext } from "../../supabase/cart-context"
import CartItem from "../UI/CartItem"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cartData, setCartData } = useContext(CartContext)

  const navigate = useNavigate()
  const continueHandler = () => {
    navigate("/")
  }

  return (
    <div className="w-full min-h-fit pb-[14vh] pt-[10vh] px-[10vw] md:pb-[13vh] md:pt-[8vh] overflow-x-clip border-b-[1px] m-0 bg-isabelline relative">
      <h1 className="font-poppins font-bold sm:max-w-[60vw] md:max-w-[45vw] lg:max-w-[35vw] text-4xl text-shadow">
        Shopping Cart
      </h1>

      <p className="mt-[5vh] mb-1 text-lg sm:max-w-[60vw] md:max-w-[45vw] lg:max-w-[35vw] font-poppins">
        0 Courses in Cart
      </p>
      <div className="w-full border border-black border-opacity-20 h-60">
        {(cartData.length > 0) ? 
        (<div className="flex flex-col w-full h-full gap-4 px-[2vw] py-[3vh]">
          {cartData.map(item => (
          <CartItem item={item} key={item.title}/> ))}
        </div>) : 
        (<div className="flex flex-col h-full items-center px-[2vw] py-[3vh]">
          <p className="text-xl font-poppins">
            Empty Cart
          </p>
          <button onClick={continueHandler} className="w-[20%] text-lg h-12 bg-azure mt-[8vh] font-roboto-slab rounded-sm text-milk border-[1px] hover:opacity-90 transition-all border-black">
            Keep Shopping
          </button>
        </div>)}
      </div>
    </div>
  )
}

export default Cart