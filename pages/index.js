import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  function onHandleClick(){
    console.log("order placed");
    router.push('/product');
  }
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">Click to here to view Blog</Link>
      <Link href="/product">Products</Link>
      <button onClick={onHandleClick}>Place order</button>
    </div>
  );
}

export default Home;
