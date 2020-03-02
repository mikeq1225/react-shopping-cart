import React from "react"
import { useCart } from "../hooks"
import "../styles/Checkout.css"

export default props => {
  const { cart, total } = useCart()

  return (
    <div>
      <div className="cartContainer">
        {cart.map(item => (
          <div className="cartItem" key={"item" + item.id}>
            <div className="">
              <p className="">{item.title}</p>
              <p className="">{item.style}</p>
            </div>
            <div className="">
              <p className="">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="">
          <h3>Subtotal</h3>
          <div>
            <p className="">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
