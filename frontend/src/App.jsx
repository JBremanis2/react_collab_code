// @ts-nocheck
import React from "react";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async() => {
    const response = await fetch('http://localhost:3000/api/users');
    setUsers(await response.json())
  }

  return (
    <ul>
      {users.map((user) => <UserCard key={user.id} user={user}/>)}
    </ul>
  );
}

export default App;
