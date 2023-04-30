import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
function App() {

  const [message, setMessage] = useState('text');
  const fetchData = async () => {
    const results = await axios.get('.netlify/functions/helloWorld')
    console.log(results.data.message)
    setMessage(results.data.message)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
