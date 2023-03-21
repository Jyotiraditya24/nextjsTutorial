function User({ user }) { //or we can also user prop
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <hr />
    </>
  );
}

export default User;
  