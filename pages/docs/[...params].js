import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params=[] } = router.query; // this will any array 
//   we use {params=[]} as during pre-rendering the params is undefined
  console.log(params);
  return <h1>Docs Home Page {params}</h1>;
}

export default Docs;
