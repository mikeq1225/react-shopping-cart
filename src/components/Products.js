import React from "react"
// import { Link } from "react-router-dom"
import { useProducts, useCart } from "../hooks"
import "../styles/Products.css"
import { GoDash } from "react-icons/go"
import { TiShoppingCart } from "react-icons/ti"

export default props => {
  const { products, count } = useProducts()
  const { cart, add, del } = useCart()
  // const { cartWindow, setCartWindow } = useState(false)

  return (
    <div className="products">
      <div className="cartParent">
        <div className="cartWindow">
          <button className="cartButton">
            <TiShoppingCart />
          </button>
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
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </div>
  )
}
