import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interface/car.interface";
import {carValidator} from "../../validators/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services/car.service";
import {ISetState} from "../../types/ISetState";
import car from "./Car";


interface IProps{
    trigger:()=>void,
    carForUpdate:ICar,
    setCarForUpdate:ISetState<ICar>
}
const CarsForm:FC<IProps> = ({carForUpdate,trigger,setCarForUpdate}) => {
   const {handleSubmit,reset,register,setValue,formState:{errors,isValid}}= useForm<ICar>({
        mode:'onBlur',
        resolver:joiResolver(carValidator)
    })
    useEffect(()=>{
        if(carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    },[carForUpdate,setValue])

    const save:SubmitHandler<ICar>= async (car)=>{
        await carService.create(car)
        trigger()
        reset()
    }

    const update:SubmitHandler<ICar> = async (car)=>{
       await carService.updateById(carForUpdate.id,car)
        trigger()
        setCarForUpdate(null)
        reset()
    }
    return (
        <div>
         <form onSubmit={handleSubmit(carForUpdate ? update:save)}>
             <input type="text" placeholder={'brand'} {...register('brand')}/>
             <input type="text" placeholder={'price'} {...register('price')}/>
             <input type="text" placeholder={'year'} {...register('year')}/>
             <button disabled={!isValid}>{carForUpdate ? 'Update':'Save'}</button>
         </form>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>price: {errors.price.message}</div>}
            {errors.year && <div>year: {errors.year.message}</div>}
        </div>
    );
};

export default CarsForm;