import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const getUsers = async () => {
    const _users = await window.db.getUsers();
    setUsers(_users);
  };
  const handleCreateUser = async () => {
    await window.db.createUser({ name });
    getUsers();
  };

  return (
    <>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={handleCreateUser}>Create User</button>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
