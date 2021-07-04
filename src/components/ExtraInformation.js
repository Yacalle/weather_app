export default function ExtraInformation ({datalocation}){
    return(
        <div>
            <p><span>Humidity:</span> {datalocation[0].current.humidity}%</p>
            <p><span> Pressure:</span> {datalocation[0].current.pressure_mb} millibars</p>
            <p><span>Wind:</span> {datalocation[0].current.wind_kph} km/h</p>
            <p><span>Direction of the wind:</span> {datalocation[0].current.wind_dir}</p>
        </div>
    )
}