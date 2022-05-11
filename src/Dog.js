import {useParams} from "react-router-dom"
import {getDog, getDogs} from "./datadogs"

export default function Dog(){
    const param=useParams()
    const {name, age, hobby}=getDog(param.name)
    return (
        <>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{hobby}</p>
        </>
    )
}