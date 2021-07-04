export default function Button ({setTemperature, setTempLetter, datalocation, temperature}){
    return(
        <button onClick={(e)=>{
            if(temperature === datalocation[0].current.temp_c){
                setTemperature(datalocation[0].current.temp_f);
                setTempLetter('°F')
            };
            if(temperature === datalocation[0].current.temp_f){
                setTemperature(datalocation[0].current.temp_c);
                setTempLetter('°C')
            }
        }}>°C⇋°F</button>
    )
}