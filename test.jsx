import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => {
        setErrors(['Failed to fetch users. Please try again later.']);
        console.error(error);
      });
  }, []);

  const handleCreateUser = (event) => {
    event.preventDefault();

    axios.post('/users', { name, email })
      .then(response => {
        setUsers([...users, response.data]);
        setName('');
        setEmail('');
      })
      .catch(error => {
        setErrors(error.response.data.errors.map(e => e.msg));
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Users</h1>

      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>{error}</p>
          ))}
        </div>
      )}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>

      <form onSubmit={handleCreateUser}>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default App;
