import React from "react";

function Products({elementProduct, addTocart}) {
  return (
    <div>
      <div className="col-md-3 col-sm-6">
        <div className="single-shop-product">
          <div className="product-upper">
            <img
              src={elementProduct.image}
              alt=""
            />
          </div>
          <h2>
            <a>{elementProduct.title}</a>
          </h2>
          <div className="product-carousel-price">
            <ins>{elementProduct.price}$</ins>
          </div>
          <div className="product-option-shop">
            <button className="add_to_cart_button" onClick={() => addTocart(elementProduct)} >Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
