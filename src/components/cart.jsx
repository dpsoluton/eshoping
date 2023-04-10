import { useContext } from "react";
import { product } from "../dataContext/Context";

export function Cart() {
  const { cart, star,setcart,removecrt } = useContext(product);

  return (
    <div className="footer-end">
      <div className="cart-items">
        {cart.map((a) => {
          return (
            <div className="global-card">
              <img src={a.image} alt={a.name} />
              <h6>{a.name}</h6>
              <div className="card-price-rate">
                <h6>{a.price}</h6>
                {star.map((a) => {
                  return (
                    <span>
                      <i class="fa-solid fa-star"></i>
                    </span>
                  );
                })}
              </div>
              {cart.includes(a)?(
                  <button className="button" onClick={()=>{
                    removecrt(a.id)
                  }}>remove</button>
              ):(

              <button className="button">add to cart</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
