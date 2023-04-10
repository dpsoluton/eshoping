import { useContext, useState } from "react";
import { product } from "../dataContext/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link } from 'react-router-dom'

export function New() {
  


  const { data,cart,setcart,addacrt,settings,star } = useContext(product);
  



  return (
    <>
      
        <h1 className="new-head">new arrivals</h1>
        <Slider {...settings}>
 
          {data.map((a) => {
            if(a.dateofArrival >= "1/1/2040")
            return (
              <>
               
                <div className="global-card">
                <Link className="link" to = {`productview/${a.id}`} style={{color:"black"}}>
                  <img src={a.image} alt={a.name} />
                  </Link>
                  <h6>{a.name}</h6>
                  <div className="card-price-rate">
                    <h6>{a.price}</h6>
                {/* {start.map((rate)=>{
                    console.log(rate)
                      return <span><i class="fa-solid fa-star"></i></span>
                })} */}
                   
                  </div>
                  <button className="button" onClick={()=>{
                    addacrt(a)
                  }}>add to cart</button>
                </div>
           
              </>
            );
          })}
        </Slider>
   
    </>
  );
}
