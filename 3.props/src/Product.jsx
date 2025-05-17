import React from "react";

function Product(props) {
  const {productName , price} = props;
    return (
    
    <div>
      <div> ABOUT THE PRODUCTS </div>

      <div>
        <div>ProductName : {props.productName}</div>
        <div>Price : {props.price} TL </div>
      </div>

    </div>
  );
}


export default Product;
