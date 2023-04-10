import { useEffect, useState } from "react"
import men from '../bannerimage/men.jpg'
import women from '../bannerimage/women.jpg'
import kids from '../bannerimage/kids.jpg'
import '../css/banner.css'

export function Banner(){
    let i = 0
    const image = [men,women,kids]
    const[img,setimg]=useState([])     
      
 
    return (
        <div className="banner">
            {/* <img src={men} alt="" /> */}
            
        </div>
    )
}