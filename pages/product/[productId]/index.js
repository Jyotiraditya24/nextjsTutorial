import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId; // .productId is the same name we gave in []
  return <h1>Details of the Product {productId} </h1>;
}

export default ProductDetail;
