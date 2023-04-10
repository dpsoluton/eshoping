import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { product } from "../dataContext/Context";

const Kids= () => {
  const { data,cart,setcart,addacrt,settings,star } = useContext(product);
  // console.log(data)
  return (
    <div className="global">
      {data.map((a) => {
        if (a.department === "Baby" ||
         a.department === "Toys" ||
         a.department === "Music"){
          return (
    
          
                <div className="global-card">
                <Link
                className="link"
                to={`productview/${a.id}`}
                style={{ color: "black" }}
              >
                  <img src={a.image} alt={a.name} />
                  <h4>{a.department}</h4>
                  <h6>{a.name}</h6>
                  <div className="card-price-rate">
                    <h6>{a.price}</h6>
                    {/* {start.map((rate)=>{
                    console.log(rate)
                      return <span><i class="fa-solid fa-star"></i></span>
                })} */}
                  </div>
                  </Link>
                  <button
                    className="button"
                    onClick={() => {
                      addacrt(a);
                    }}
                  >
                    add to cart
                  </button>
                </div>
           
         
          );
        }
          
      })}
   </div>
  );
};

export default Kids;
