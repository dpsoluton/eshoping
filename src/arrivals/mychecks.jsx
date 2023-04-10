import { useContext, useEffect, useState } from "react";
import { product } from "../dataContext/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const head = {
  fontSize:"3em",
  textTransform:"Capitalize",
  fontFamily:"sarif",
  color:"darkblue",
  letterSpacing:"1px"
}
export function Mychecks() {

  


  const { data,cart,setcart,addacrt,settings,star,removecrt } = useContext(product);
  



  return (
    <>
    <div className="check-cont">

  
      
        <h1 className="new-head" style={head}>my checks</h1>
        <Slider {...settings}>
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
      

        </Slider>
        </div>
   
    </>
  );
}
