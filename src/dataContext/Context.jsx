import { createContext, useState } from "react";
import {faker} from '@faker-js/faker'
faker.seed(50)
export const product = createContext();


export const ProductContext = ({children}) => {
  const [cart,setcart] = useState([])
  const addacrt = (item)=>{
    setcart([...cart,item])
  }
  const removecrt =(id)=>{
    setcart(cart.filter((item)=>item.id !== id))
  }

  const data = [...Array(50)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    department:faker.commerce.department(),
    image:faker.image.image(),
    price:faker.commerce.price(),
    dateofArrival:faker.datatype.datetime().toLocaleDateString(),
    rating:faker.helpers.arrayElement([1,2,3,4,5]),
  }))
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const star = [1, 2, 3, 4, 5];
    


  return <product.Provider value = {{data,cart,setcart,addacrt,settings,star,removecrt}}>
    {children}</product.Provider>;
};
