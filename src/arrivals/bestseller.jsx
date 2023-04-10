import { useContext, useState } from "react";
import { product } from "../dataContext/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Productview } from "../components/productview";
import { Link } from "react-router-dom";

export function BestSeller() {
  


  const { data,cart,setcart,addacrt,settings,star } = useContext(product);
  
  

 
  return (
    <>
      
        <h1 className="new-head">best seller</h1>
      
        <Slider {...settings}>
          {data.map((a) => {
            if(a.rating >="4")
            return (
              <>
              
                <div className="global-card">
                <Link className="link" to = {`productview/${a.id}`} style={{color:"black",textDecoration:"none"}}>
                 <img src={a.image} alt={a.name} />
                  <h6>{a.name}</h6>
                  
                  <div className="card-price-rate">
                    <h6>{a.price}</h6>
                    {/* {star.map((a)=>{
                     return <span><i class="fa-solid fa-star"></i></span>
                    })} */}
                   
                  </div>
                  </Link>
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
