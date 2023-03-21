import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) {
    return "an has occured";
  }
  if (!data) {
    console.log(data);
    return "Loading";
  }
  return (
    <div>
      <h2>DashBoard</h2>
      <h3>{data[0].name}</h3>
      <h3>{data[0].email}</h3>
    </div>
  );

  //first paramter is the key
  // second argumnet is where we fetch the data
}
export default DashboardSWR;
