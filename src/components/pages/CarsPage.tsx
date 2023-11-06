import Cars from "../Cars/Cars";
import CarsForm from "../Cars/CarsForm";
import {useState} from "react";
import {ICar} from "../../interface/car.interface";
import {Outlet} from "react-router-dom";

export const CarsPage=()=>{
    const [flag,setFlag] = useState<boolean>(null)
    const [carForUpdate,setCarForUpdate] = useState<ICar>(null)

    const trigger = ():void=>{
        setFlag(prevState => !prevState)
    }
return(<div>
    <CarsForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
    <hr/>
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <Cars flag={flag} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
        <Outlet/>
    </div>


</div>)
}