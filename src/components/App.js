import React from "react"
import "../styles/App.css"
import { Route, Redirect } from "react-router-dom"
import Products from "./Products.js"
import Checkout from "./Checkout.js"
import Summary from "./Summary.js"

export default (props) => {
	return (
		<div>
			<Route
				exact
				path="/"
				render={() => <Redirect to="/react-shopping-cart" />}
			/>
			<Route path="/react-shopping-cart" component={Products}></Route>
			<Route path="/react-shopping-cart/summary" component={Summary}></Route>
			<Route path="/react-shopping-cart/checkout" component={Checkout}></Route>
		</div>
	)
}
