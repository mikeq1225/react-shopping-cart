import React from "react"
import "../styles/App.css"
import { Route } from "react-router-dom"
import Products from "./Products.js"
import Checkout from "./Checkout.js"

export default props => {
  return (
    <div>
      <Route exact path="/" component={Products}></Route>
      <Route path="/checkout" component={Checkout}></Route>
    </div>
  )
}
