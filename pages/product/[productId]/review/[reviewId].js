import { useRouter } from "next/router";
function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h1>Product Id is {productId}</h1>
      <h1>Review Id is {reviewId}</h1>
    </>
  );
}

export default Review;