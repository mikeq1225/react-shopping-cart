import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../hooks"
import "../styles/Checkout.css"

export default props => {
  const { cart, total } = useCart()

  return (
    <div className="receiptContainer">
      <h1>Receipt</h1>
      <h3>Thank you for your order.</h3>
      <div>
        {cart.map(item => (
          <div className="receiptItem" key={"item" + item.id}>
            <p>{item.sku}</p>
            <p>{item.title}</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="receiptTotal">
        <div className="receiptTotal2">
          <p>Purchase Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <Link to={{ pathname: "/", cart: [] }}>
          <button>Return to shopping page</button>
        </Link>
      </div>
    </div>
  )
}
