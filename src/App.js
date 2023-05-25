import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([])

  const addUser = newUser => {
    setUsersList(prevUsersList => [...prevUsersList, newUser])
  }
  return (
    <div>
      <AddUser addUser = {addUser} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
