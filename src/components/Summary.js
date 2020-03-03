import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../hooks"
import "../styles/Summary.css"

export default props => {
  const { cart, total } = useCart()

  return (
    <div className="summaryContainer">
      <h1>Current Order</h1>
      <h3>Please review your order.</h3>
      <div className="shadow">
        {cart.map(item => (
          <div className="summaryItem" key={"item" + item.id}>
            <img src={item.imgs.thumb} alt="t-shirt" />
            <div className="summaryDiv">
              <p className="summaryTitle">{item.title}</p>
              <p className="summaryStyle">{item.style}</p>
              <p className="summaryQuantity">Quantity: {item.quantity}</p>
            </div>
            {/* <div className="priceDiv"> */}
            <p className="summaryPrice">${item.price.toFixed(2)}</p>
            {/* </div> */}
          </div>
        ))}
      </div>
      <div className="summaryTotal">
        {/* <div className="summaryTotal2"> */}
        <div className="summaryTotal2">
          <p>Order Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="summaryTotal2">
          <Link to={{ pathname: "/", cart: [] }}>
            <button className="summaryButton">Return to shopping page</button>
          </Link>
          <Link to={{ pathname: "/checkout", cart: [] }}>
            <button className="summaryButton">Confirm Order</button>
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}
