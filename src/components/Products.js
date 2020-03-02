import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useProducts, useCart } from "../hooks"
import "../styles/Products.css"
import { GoDash } from "react-icons/go"
import { TiShoppingCart } from "react-icons/ti"

export default props => {
  const { products, count } = useProducts()
  const { cart, add, del, total } = useCart()
  const [show, setShow] = useState(false)

  return (
    <div className="products">
      <p className="productFound">{count} Product(s) found.</p>
      <div className="productContainer">
        {products.map(product => (
          <div
            className="items"
            onClick={e => add(product)}
            key={"product" + product.id}
          >
            <div className={product.isFreeShipping ? "freeShip" : "blank"}>
              Free Shipping
            </div>
            <img src={product.imgs.normal} alt="t-shirt" />
            <p className="title">{product.title}</p>
            <p className="dash">
              <GoDash />
            </p>
            <p className="price">
              {product.currencyFormat} {product.price.toFixed(2)}
            </p>
            <p className="install">
              or {product.installments} x {product.currencyFormat}
              {(product.price / product.installments).toFixed(2)}
            </p>
            <button className="addToCartButton">Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cartParent">
        <div className={show ? "cartWindow" : "hidden"}>
          <button
            className="cartButton"
            onClick={e => (!show ? setShow(true) : setShow(false))}
          >
            <TiShoppingCart />
          </button>
          <div className="cartHeader">
            <TiShoppingCart className="cartIcon" />
            <h1>Cart</h1>
          </div>
          <div className="cartContainer">
            {cart.map(item => (
              <div className="cartItem" key={"item" + item.id}>
                <img
                  className=""
                  key={"item" + item.id}
                  src={item.imgs.thumb}
                  alt="t-shirt"
                />
                <div className="titleDiv">
                  <p className="cartTitle">{item.title}</p>
                  <p className="cartStyle">{item.style}</p>
                </div>
                <div className="priceDiv">
                  <button className="deleteButton" onClick={e => del(item.id)}>
                    x
                  </button>
                  <p className="cartPrice">${item.price.toFixed(2)}</p>
                  <div>
                    <button className="quantityButton">-</button>
                    <button className="quantityButton">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="subCheckDiv">
            <div className="subTotal">
              <h3>SUBTOTAL</h3>
              <div>
                <p className="cartPrice">${total.toFixed(2)}</p>
                {/* <p> or up to</p> */}
              </div>
            </div>
            <Link to={{ pathname: "/checkout", data: cart }}>
              <div className="checkoutDiv">
                <button className="checkout">Checkout</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
