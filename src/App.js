import './App.css';
import React,{useEffect, useState} from 'react';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';

function App() {
  const [ballot, setBallot] = useState([]);
  useEffect(async() => {
    await api.getBallotData().then(data => {
      setBallot(data);
    })
  },[])

  return (
    <div className="App">
      <h1>AWARDS 2021</h1>
      <Ballot ballot={ballot}/>
    </div>
  );
}

export default App;
