import React, {FC} from 'react';
import {ICar} from "../../interface/car.interface";
import {useNavigate} from "react-router-dom";
import {ISetState} from "../../types/ISetState";
import {SubmitHandler} from "react-hook-form";
import {carService} from "../../services/car.service";

interface IProps{
    car:ICar,
    setCarForUpdate:ISetState<ICar>,
    trigger:()=>void
}
const Car:FC<IProps> = ({car,setCarForUpdate,trigger}) => {
    const {id,price,year,brand} = car
    const navigate = useNavigate()
    const deleteById =async ()=>{
        await carService.deleteById(id)
        trigger()
    }
    return (
        <div>
            <div style={{border: '1px solid', margin: '5px 0'}}>
                <div>id: {id}</div>
                <div>brand: {brand}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
                <button onClick={() => setCarForUpdate(car)}>update</button>
                <button onClick={deleteById}>delete</button>
                <button onClick={() => navigate('select', {state: {car}})}>select</button>
            </div>
        </div>
    );
};

export default Car;