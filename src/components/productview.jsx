import { useContext } from "react";
import { useParams } from "react-router-dom";
import { product } from "../dataContext/Context";

export function Productview() {
  const { id } = useParams();
  const { data } = useContext(product);
  const item = data.find((product) => product.id === id);
  return (
    <>
      <div className="product-cont">
        <div className="product-view">
          <img src={item.image} alt={item.name} />
          </div>
          <div className="product-info">
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
          </div>
      
      </div>
    </>
  );
}
