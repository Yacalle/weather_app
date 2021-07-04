export default function IconTem ({datalocation, temperature, tempLetter}){
    return(
        <>
            <img src={datalocation[0].current.condition.icon}></img>
            <p>{temperature}{tempLetter}</p>
        </>
    )
}