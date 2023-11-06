import {ICar} from "../../interface/car.interface";
import {FC} from "react";

interface IProps{
    car:ICar
}

export const SelectedCar:FC<IProps>=({car})=>{
const {id,brand,price,year}= car
    return(<div>
        <div>id:{id}</div>
        <div>brand:{brand}</div>
        <div>price:{price}</div>
        <div>year:{year}</div>
    </div>)
}