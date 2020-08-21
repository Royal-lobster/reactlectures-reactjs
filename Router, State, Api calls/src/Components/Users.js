import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";

function Users() {
  const [users, setUsers] = useState([""]);
  const [addUser, setAddUser] = useState([""]);

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    Axios.get(URL).then((res) => setUsers(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(URL, {})
      .then((res) => console.log(res))
      .then(setAddUser([]));
  };

  return (
    <div className="users">
      <div className="users__input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={addUser}
            id="user_name"
            onChange={(e) => setAddUser(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>

      {users.map((user) => (
        <div className="users__list">
          <ul>
            <li key={user.id}>{user.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Users;
