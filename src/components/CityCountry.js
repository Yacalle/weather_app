export default function CityCountry ({datalocation}){
    return(
        <>
            <h2>{datalocation[0].location.name}, {datalocation[0].location.country}</h2> 
            <p>{datalocation[0].current.condition.text}</p>
        </>

    )
}