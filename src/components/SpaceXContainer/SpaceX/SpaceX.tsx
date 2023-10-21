import {useEffect, useState} from "react";
import {ISpacex} from "../../../interfaces/spacex.interface";
import {spacexService} from "../../../services/spacex.service";
import {Launch} from "../Launch/Launch";

export const SpaceX=()=>{
    const [launches,setLaunches] = useState<ISpacex[]>([])
    useEffect(()=>{
        spacexService.getAll().then(({data})=>setLaunches(data))
    },[])


    return(<div>
     <div>
         {launches.filter(value => value.launch_year !== "2020").map((launch,index)=><Launch launch={launch} key={index}/>)}
     </div>
    </div>)
}