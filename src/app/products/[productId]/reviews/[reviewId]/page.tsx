import React from "react";
import { notFound } from "next/navigation";

function ReviewById({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Product {params.productId}ReviewById {params.reviewId}
    </div>
  );
}

export default ReviewById;
