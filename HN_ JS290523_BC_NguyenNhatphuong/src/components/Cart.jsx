import React from "react";
import "./Cart.css";

function Cart({ cartProduct, updateQuantity, deleteProduct, totalMoney, handleDelete, setCartProduct }) {

 

  return (
    <div>
      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive shop_cart_table">
                  <table className="table" >
                    <thead>
                      <tr>
                        <th>Stt</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProduct.map((e, i) => (
                        <tr key={i}>
                          <td>{i+1}</td>
                          <td>{e.title}</td>
                          <td>
                            <img
                              style={{ width: "150px", height: "130px" }}
                              src={e.image}
                              alt=""
                            />
                          </td>
                          <td>
                            <button onClick={() => updateQuantity(e.id, e.quantity -1)} disabled={e.quantity <=1}>-</button>
                            {e.quantity}
                            <button onClick={() => updateQuantity(e.id, e.quantity +1)}>+</button>
                          </td>
                          <td>{e.price}</td>
                          <td>{(e.price)*(e.quantity)}</td>
                          <td>
                            <button className="btn-delete" onClick={()=>deleteProduct(e.id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="border p-3 p-md-4">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <button className="btn-clear" onClick={()=>handleDelete(setCartProduct)}>clear cart</button>
                          </td>
                        </tr>
                        <tr>
                          <td>Total: {totalMoney}</td>
                          <td>
                            <strong />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
