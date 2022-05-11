import { getDogs } from "./datadogs";
import { NavLink, Outlet } from 'react-router-dom';

export default function Dogs(){
    const dogs=getDogs()
    return(
        <nav>
        {dogs.map((dog)=><NavLink to={`/dogs/${dog.name}`} className={({isActive})=>isActive?"active":"inactive"} key={dog.name}><img src={dog.image}/>{dog.name}</NavLink>)}
        <Outlet/>
        </nav>
    )
}