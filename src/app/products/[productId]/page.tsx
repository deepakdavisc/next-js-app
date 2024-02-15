import React from "react";

function ProductDetails({ params }: { params: { productId: string } }) {
  console.log(params);
  return <div>Product Details of {params.productId}</div>;
}

export default ProductDetails;
