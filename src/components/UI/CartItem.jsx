const CartItem = (props) => {
  return (
    <div className="w-full flex justify-between gap-2 border-2">
      <p>{props.item.title}</p>
      <p>€{props.item.price}</p>
      <p>{props.item.amount}</p>
      <p>total: €{props.item.price * props.item.amount}</p>
    </div>
  )
}

export default CartItem