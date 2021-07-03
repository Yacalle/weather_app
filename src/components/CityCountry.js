export default function CityCountry ({datalocation}){
    return(
        datalocation.length === 1 ? 
        <h2>{datalocation[0].location.name}, {datalocation[0].location.country}</h2> 
        : ''
    )
}