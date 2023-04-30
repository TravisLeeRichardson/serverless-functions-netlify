import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();

    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    setMessage(''); // clear the message out

    try {
      const response = await axios.post('/.netlify/functions/helloWorld', { message });
      setMessage(response.data.message);
    } catch (error) {
      console.log(error.response.data);
      setMessage("Error: " + error.response.data.error);
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="message">{message}</p>
          <form onSubmit={submitForm}>
            <label htmlFor="message-input">Enter a message:</label>
            <input type="text" id="message-input" name="message" />
            <button type="submit">Submit</button>
          </form>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >

          </a>
        </header>
      </div>
  );
}

export default App;
