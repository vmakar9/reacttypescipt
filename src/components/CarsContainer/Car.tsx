import {ICar} from "../../interfaces/car.interface";
import {FC, PropsWithChildren, useRef, useState} from "react";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slice/carSlice";
import empty from "../../assets/images/empty.png"
import {carService} from "../../services/car.service";
interface IProps extends PropsWithChildren{
    car:ICar
}
export const Car:FC<IProps>=({car})=>{
    const {id,brand,price,year,photo} = car
    const dispatch = useAppDispatch()

    const fileInput = useRef<HTMLInputElement>();
    const [image,setImage] = useState<string>(null)

    const addPhoto = async ():Promise<void>=>{
        const formData = new FormData();
        const file:Blob = fileInput.current.files[0];
        formData.append('photo',file)
        await carService.addPhoto(id,formData)
        setImage(URL.createObjectURL(file))
    }


    return(<div>
        <div>id:{id}</div>
        <div>brand:{brand}</div>
        <div>price:{price}</div>
        <div>year:{year}</div>
        <img src={photo || image || empty}
             style={{cursor: photo || image ? 'default' : 'pointer'}}
             alt={brand}
             width={'200px'}
             onClick={()=> fileInput.current.click()}/>
        <input
          type={'file'}
          accept={'image/jpeg,image/png'}
          ref={fileInput}
          style={{display:'none'}}
          disabled={!!photo || !!image }
          onChange={addPhoto}
        />

        <button onClick={()=>dispatch(carActions.setCarForUpdate({ carForUpdate:car}))}>update</button>
        <button onClick={()=>dispatch(carActions.deleteById({id}))}>delete</button>
    </div>)
}