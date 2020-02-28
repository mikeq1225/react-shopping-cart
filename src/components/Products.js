import React from "react"
// import { Link } from "react-router-dom"
import { useProducts } from "../hooks"
import "../styles/Products.css"
import { GoDash } from "react-icons/go"
import { TiShoppingCart } from "react-icons/ti"

export default props => {
  const { products, count } = useProducts()

  return (
    <div className="products">
      {/* <Link to={"/cart"}><?Link> */}
      {/* <div className="cartParent">
        <button className="cartButton">
          <TiShoppingCart />
        </button>
        <div className="cartWindow">
          <img src="/assets/100_2.jpg" alt="t-shirt" />
          <h1>Hello World 1</h1>
        </div>
      </div> */}
      <p>{count} Product(s) found.</p>
      <div name="hover" className="productContainer">
        {products.map(product => (
          <div className="items" key={"product" + product.id}>
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
