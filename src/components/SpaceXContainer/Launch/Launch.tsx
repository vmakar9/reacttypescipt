import {ISpacex} from "../../../interfaces/spacex.interface";
import {FC} from "react";

interface IProps{
    launch:ISpacex
}
export const Launch:FC<IProps>=({launch})=>{
    const {launch_year,mission_name,links:{mission_patch_small}} = launch
    return(<div>
        <h3>{launch_year}</h3>
        <h3>{mission_name}</h3>
        <img src={mission_patch_small} alt={`${mission_name} photo`}/>
    </div>)
}