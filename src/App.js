import React, {useState, useEffect} from 'react';
import './App.css';
import CityCountry from './components/CityCountry';
import IconTem from './components/IconTemp';
import Button from './components/Button';
function App() {
  const [coordinate, setCoordinate] = useState([]);
  const [datalocation, setDataLocation] = useState([]);
  const [temperature, setTemperature] = useState('');
  const [tempLetter, setTempLetter] = useState('')
  useEffect(()=>{
  const succes = (position)=>{
    setCoordinate([...coordinate, position.coords.latitude, position.coords.longitude]);
  };
  const err = (err)=>{
    console.log(err)
  };
  navigator.geolocation.getCurrentPosition(succes, err)
  }, []);

  useEffect(()=>{
    if(coordinate.length === 2){
      let url = `https://api.weatherapi.com/v1/current.json?key=79e0d9ef4b9d4a6bae9192505210207&q=${coordinate[0]},${coordinate[1]}`;
      fetch(url)
      .then(res=>res.json())
      .then(json=>{
         setTemperature(json.current.temp_c)
         setTempLetter('°C')
         setDataLocation([...datalocation, json])
      })
    }
  }, [coordinate]);
  return (
    <div className="App">
      <header className="App-header">
        <CityCountry datalocation = {datalocation}/>
        <IconTem datalocation = {datalocation} 
        temperature = {temperature}
        tempLetter={tempLetter}/>
        <Button setTemperature={setTemperature} 
        setTempLetter={setTempLetter}
        datalocation={datalocation}
        temperature={temperature} />
      </header>
    </div>
  );
}

export default App;
