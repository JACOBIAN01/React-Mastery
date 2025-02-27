
const users = [
  { id: 1, name: "geeks", age: 30 },
  { id: 3, name: "geek", age: 29 },
  { id: 4, name: "ge", age: 28 },
  { id: 2, name: "g", age: 27 },
];

function People() {
  return (
    <>
      <ul>
       {
        users.map(
          (user)=>(
            <li key={user.id}>{user.name}</li>
          )
        )
       }
      </ul>
    </>
  );
}

export default People;
