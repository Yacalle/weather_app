export default function IconTem ({datalocation, temperature, tempLetter}){
    return(
        datalocation.length === 1?
        <div>
            <img src={datalocation[0].current.condition.icon}></img>
            <p>{temperature} {tempLetter}</p>
        </div>
        : ''
    )
}