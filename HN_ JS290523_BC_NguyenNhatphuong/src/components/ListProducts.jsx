import React, { useState } from "react";
import Cart from "./Cart";
import Products from "./Products";

function ListProducts() {
  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      title: "ring",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1591209627710-d2427565a41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "neck",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1620441090373-f6977a23fa0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "bracelet",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "ring gold",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
  ]);

  const [cartProduct, setCartProduct] = useState([]);
  const addTocart = (product) => {
    const existingProduct = cartProduct.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCartProduct([...cartProduct]);
    } else {
      setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemID, newQuantity) => {
    if (newQuantity >= 1) {
      const editQuantity = cartProduct.map((e) =>
        e.id === itemID ? { ...e, quantity: newQuantity } : e
      );
      setCartProduct(editQuantity);
    }
  };

  const deleteProduct = (idDelete) => {
    const deleteCart = cartProduct.filter((item) => item.id !== idDelete);
    setCartProduct(deleteCart);
  };

  let totalMoney = 0;
  for (let i = 0;  i < cartProduct.length; i++) {
    totalMoney += (cartProduct[i].price) * (cartProduct[i].quantity)
  }

  const handleDelete = (id) => {
    const cart = [];
    setCartProduct(cart);
  };


  return (
    <div>
      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li style={{ marginRight: "20px" }}>
                  
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* End mainmenu area */}
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>List Product</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List product */}
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            {/* <Products /> */}
            {dataProduct.map((element, index) => (
              <Products
                key={index}
                elementProduct={element}
                addTocart={addTocart}
              />
            ))}
          </div>
        </div>
      </div>
      <Cart cartProduct={cartProduct} 
      updateQuantity={updateQuantity} 
      deleteProduct={deleteProduct} totalMoney={totalMoney} 
      handleDelete={handleDelete}
      setCartProduct={setCartProduct}
      />
    </div>
  );
}

export default ListProducts;
