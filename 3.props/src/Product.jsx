import React from "react";

function Product({productName, price}) {
  // const {productName , price} = props;
    return (
    
    <div>
      <div> ABOUT THE PRODUCTS </div>

      <div>
        <div>ProductName : {productName}</div>
        <div>Price : {price} TL </div>
      </div>

    </div>
  );
}


export default Product;
