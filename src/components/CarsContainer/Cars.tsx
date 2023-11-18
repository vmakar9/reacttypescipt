import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Car} from "./Car";
import {useEffect} from "react";
import {carActions} from "../../redux/slice/carSlice";

export const Cars=()=>{
    const {cars,trigger}= useAppSelector(state => state.cars)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch,trigger])


    return(<div>
        {cars.map(car=><Car key={car.id} car={car}/>)}
    </div>)
}