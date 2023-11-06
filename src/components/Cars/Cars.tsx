import React, {FC, useEffect, useState} from 'react';
import {ICar} from "../../interface/car.interface";
import {carService} from "../../services/car.service";
import Car from "./Car";
import {ISetState} from "../../types/ISetState";

interface IProps{
    flag:boolean,
    setCarForUpdate:ISetState<ICar>,
    trigger:()=>void
}

const Cars:FC<IProps> = ({flag,setCarForUpdate,trigger}) => {
    const [cars,setCars] = useState<ICar[]>([])
    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[flag])
    return (
        <div style={{width:'50%'}}>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} trigger={trigger}/>)}
        </div>
    );
};

export default Cars;