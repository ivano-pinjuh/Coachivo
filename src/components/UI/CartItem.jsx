import { useContext } from "react"
import { CartContext } from "../../supabase/cart-context"

const CartItem = (props) => {
  const { cartData, setCartData } = useContext(CartContext)

  const removeHandler = () => {
    let temp_data = []
    cartData.forEach(item => {
      if (item.title != props.item.title) {
        temp_data.push(item)
      }
    })

    setCartData(temp_data)
  }

  return (
    <div className="w-full h-28 flex justify-between gap-2 border">
      <div className="flex flex-grow">
        <div className="bg-azure h-full aspect-video"></div>

        <div className="flex pl-4 flex-col w-full">
          <h5 className="font-poppins text-base md:text-xl font-semibold">
            {props.item.title}
          </h5>
          <p className="font-roboto-slab text-sm opacity-70">
            By {props.item.author}
          </p>
        </div>
        

      </div>

      <div className="flex flex-wrap justify-end w-[20%] pr-4">
        <p className="font-roboto-slab text-lg pr-2">
          {props.item.amount}x
        </p>
        <p className="font-roboto-slab font-semibold text-lg">
          €{props.item.price}
        </p>

        <div className="w-full flex justify-end">
          <p onClick={removeHandler} className="cursor-pointer font-roboto-slab text-sm opacity-85">
            Remove item
          </p>
        </div>

      </div>
    </div>
  )
}

export default CartItem