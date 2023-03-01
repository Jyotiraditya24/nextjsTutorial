import React from 'react'

//function users ({users}) or given below 
function users(props) {
  return (
    <div>
        <h1>List of Users</h1>
        <ul>
            {props.users.map(user =>{
                return (
                    <div key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <hr />
                    </div>
                )
            })}
        </ul>
    </div>
  )
}

export default users;

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    return {
        props:{
            users: data,
        }
    }
    // returning an object
}