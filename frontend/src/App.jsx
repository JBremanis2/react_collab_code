// @ts-nocheck
import React from "react";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async() => {
    const response = await fetch(apiUrl);
    setUsers(await response.json())
  }

  return (
    <div>
      {users.map((user) => <UserCard key={user.id} user={user}/>)}
    </div>
  );
}

export default App;
