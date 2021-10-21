import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': '2008af8f-7cb9-4777-9a96-bebb9e86a45d',
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });
    } catch (err) {}
  };

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Team Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
            placeholder='Username'
            required
          ></input>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='Password'
            required
          ></input>
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting!</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
