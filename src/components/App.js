import React from "react"
import "../styles/App.css"
import { Route } from "react-router-dom"
import Products from "./Products.js"
// import Cart from "./Cart.js"

export default props => {
  return (
    <div>
      <Route path="/" component={Products}></Route>
    </div>
  )
}
