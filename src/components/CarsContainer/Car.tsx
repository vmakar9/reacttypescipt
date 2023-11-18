import {ICar} from "../../interfaces/car.interface";
import {FC} from "react";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slice/carSlice";

interface IProps{
    car:ICar
}
export const Car:FC<IProps>=({car})=>{
    const {id,brand,price,year} = car
    const dispatch = useAppDispatch()
    return(<div>
        <div>id:{id}</div>
        <div>brand:{brand}</div>
        <div>price:{price}</div>
        <div>year:{year}</div>
        <button onClick={()=>dispatch(carActions.setCarForUpdate({ carForUpdate:car}))}>update</button>
        <button onClick={()=>dispatch(carActions.deleteById({id}))}>delete</button>
    </div>)
}