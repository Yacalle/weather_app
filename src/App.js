import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [coordinate, setCoordinate] = useState([]);
  const [datalocation, setDataLocation] = useState([]);
  useEffect(()=>{
    const option = {
      enableHighAccuracy: true,
      maximumAge: 5000,
      timeout: 0
  };
  const succes = (position)=>{
    setCoordinate([...coordinate, position.coords.latitude, position.coords.longitude]);
  };
  const err = (err)=>{

  };
  navigator.geolocation.getCurrentPosition(succes, err, option)
  }, []);

  useEffect(()=>{
    if(coordinate.length === 2){
      let url = `https://api.weatherapi.com/v1/current.json?key=79e0d9ef4b9d4a6bae9192505210207&q=${coordinate[0]},${coordinate[1]}`;
      fetch(url)
      .then(res=>res.json())
      .then(json=>{
         setDataLocation([...datalocation, json])
      })
    }
  }, [coordinate]);

  useEffect(()=>{
    if(datalocation.length !==0){
      console.log(datalocation)
    }
  }, [datalocation]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
