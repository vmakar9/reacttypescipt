import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/car.interface";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slice/carSlice";
import {useEffect} from "react";

export const CarForm=()=>{
    const {reset,register,setValue,handleSubmit}=useForm<ICar>()
    const dispatch =useAppDispatch()
    const {carForUpdate} = useAppSelector(state => state.cars)

    useEffect(()=>{
        if(carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[setValue,carForUpdate])

    const save:SubmitHandler<ICar>= async (car)=>{
      await dispatch(carActions.create({car}))
        reset()
    }

    const update:SubmitHandler<ICar>=async (car)=>{
       await dispatch(carActions.updateById({id:carForUpdate.id,car}))
        reset()
    }

    return(<div>
       <form onSubmit={handleSubmit(carForUpdate?update:save)}>
        <input type="text" placeholder={'brand'} {...register('brand')}/>
        <input type="text" placeholder={'price'} {...register('price')}/>
        <input type="text" placeholder={'year'} {...register('year')}/>
        <button>{carForUpdate?'update':'save'}</button>
    </form>
    </div>)
}