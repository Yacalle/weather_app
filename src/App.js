import React, {useState, useEffect} from 'react';
import './App.css';
import CityCountry from './components/CityCountry';
import IconTem from './components/IconTemp';
import Button from './components/Button';
import ExtraInformation from './components/ExtraInformation';
function App() {
  const [coordinate, setCoordinate] = useState([]);
  const [datalocation, setDataLocation] = useState([]);
  const [temperature, setTemperature] = useState('');
  const [tempLetter, setTempLetter] = useState('');
  useEffect(()=>{
  const succes = (position)=>{
    setCoordinate([...coordinate, position.coords.latitude, position.coords.longitude]);
  };
  navigator.geolocation.getCurrentPosition(succes)
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
  return(
    datalocation.length !==0 ? 
      <div className="App">
        <div className="App_container">
          <div className="container_CityCountry">
            <CityCountry datalocation = {datalocation}/>
          </div>
          <div className="container_IconButtonExtra">
            <div className="IconButtonExtra_IconButton">
              <div className="IconButton_Tem">
                <IconTem datalocation = {datalocation} temperature = {temperature} tempLetter={tempLetter}/>
              </div>
              <Button setTemperature={setTemperature} setTempLetter={setTempLetter} datalocation={datalocation} temperature={temperature} />
            </div>
            <div className="IconButtonExtra_Extra">
              <ExtraInformation datalocation={datalocation}/>
            </div>
          </div>
        </div>
      </div>
    : ''
  )  
}

export default App;
