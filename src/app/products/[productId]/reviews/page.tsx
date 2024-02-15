import React from "react";

function ProductReviews({ params }: { params: { productId: string } }) {
  return <div>All reviews of Product {params.productId}</div>;
}

export default ProductReviews;
