import Link from "next/link";

function ProductList({productID = 100}){
    return (
      <>
        <Link href="/product/1">Product 1</Link>
        <Link href="/product/2">Product 2</Link>
        <Link href="/product/3" replace>Product 3</Link>
        <Link href={`/product/${productID}`}>Product query {productID}</Link>
        <Link href="/">Home</Link>
      </>
    );
}

export default ProductList;