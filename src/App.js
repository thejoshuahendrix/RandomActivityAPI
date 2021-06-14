import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const url = "https://www.boredapi.com/api/activity";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getWithAxios();
  }, []);

  const getWithFetch = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  const getWithAxios = async () => {
    const response = await axios.get(url);
    console.log(response.data)
    setUserData(response.data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Random Activity API</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">Activity: {userData.activity}</h5>
        <h5 className="info-item">No. of Participants: {userData.participants}</h5>
        <h5 className="info-item">Cost: {userData.price}</h5>
        <h5 className="info-item">Type: {userData.type}</h5>
        
      </div>
    </div>
  );
}

export default App;
