import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([])

  const addUser = newUser => {
    setUsersList(prevUsersList => [...prevUsersList, newUser])
  }
  return (
    <>
      <AddUser addUser = {addUser} />
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
